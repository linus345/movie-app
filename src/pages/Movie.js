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
import defaultMovieBackdrop from '../images/default-movie-backdrop.svg';

const Movie = ({ location, history }) => {
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
      setLoading(false);
    } catch(err) {
      if(err.response) {
        console.log("err res: ", err.response);
        setErr(err.response);
        setLoading(false);
      } else {
        console.log("err: ", err);
        setErr(err);
        setLoading(false);
      }
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
  }, []);

  if(err) return <p>Error: {JSON.stringify(err)}</p>
  if(loading) return <p>Loading...</p>
  return(
    <Fragment>
      <Button onClick={history.goBack}>
        <FaIcon icon={faArrowLeft} />
        <p>Back</p>
      </Button>
      <MovieDetailsGrid>
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
        <MovieShortInfo movie={movie} />
        <MovieTabs movie={movie} />
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
