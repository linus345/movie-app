import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import * as api from '../api';

import MovieDetailsGrid from '../components/MovieDetailsGrid';
import MovieTabs from '../components/MovieTabs';
import MovieShortInfo from '../components/MovieShortInfo';
import Button from '../components/Button';
import LoadingMovie from '../components/LoadingMovie';
import defaultMovieBackdrop from '../images/default-movie-backdrop.svg';

const Movie = ({ location, history, mainEl, isMobile }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const trailerRef = useRef(null);

  const getMovie = async (movieId) => {
    try {
      const res = await api.getMovie(movieId);
      console.log("res: ", res);
      trailerRef.current = getTrailer(res.data.videos.results);
      setMovie(res.data);
    } catch(err) {
      if(err.response) {
        console.log("err res: ", err.response);
        setErr(err.response);
      } else {
        console.log("err: ", err);
        setErr(err);
      }
    } finally {
      setLoading(false);
    }
  }

  const getTrailer = videos => {
    console.log("videos: ", videos);
    let video = null;
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].site === "YouTube" && videos[i].type === "Trailer") {
        video = videos[i];
        break;
      }
    }
    return video;
  }

  useEffect(() => {
    getMovie(movieId);
  }, [location]);

  if(err) return <p>Error: {JSON.stringify(err)}</p>
  return(
    <Fragment>
      <Button onClick={history.goBack}>
        <FaIcon icon={faArrowLeft} />
        <p>Back</p>
      </Button>
      <MovieDetailsGrid>
        {loading ? <LoadingMovie /> : (
          <>
            <MoviePoster
              img={movie.backdrop_path ? (
                `${api.imageBase}/w1280/${movie.backdrop_path}`
              ) : defaultMovieBackdrop}
            >
              {trailerRef.current && (
                <a
                  href={`https://youtube.com/watch?v=${trailerRef.current.key}`}
                  target="_blank"
                  className="play-button"
                >
                  <FaIcon icon={faPlayCircle} style={{ color: "white" }} />
                </a>
              )}
            </MoviePoster>
            <MovieShortInfo movie={movie} isMobile={isMobile} />
            <MovieTabs movie={movie} mainEl={mainEl} isMobile={isMobile} />
          </>
        )}
      </MovieDetailsGrid>
    </Fragment>
  );
}

const MoviePoster = styled.div`
  position: absolute;
  grid-row: 1 / span 2;
  width: 100%;
  height: 100%;
  background-image: url("${props => props.img}");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .play-button {
    z-index: 10;
    border: none;
    background-color: rgba(0, 0, 0, 0);
    color: white;
    text-decoration: none;
    font-size: 70px;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default Movie;
