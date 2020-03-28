import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import * as api from '../api';

import MovieDetailsGrid from '../components/MovieDetailsGrid';
import MovieTabs from '../components/MovieTabs';
import MovieShortInfo from '../components/MovieShortInfo';
import Button from '../components/Button';

const Movie = ({ location, history }) => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const getMovie = async (movieId) => {
    try {
      const res = await api.getMovie(movieId);
      console.log("res: ", res);
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
      <MovieDetailsGrid img={`${api.imageBase}/w1280/${movie.backdrop_path}`}>
        {/* css for movie-poster is in MovieDetailsGrid.js for now */}
        {/* TODO: Add play button on poster to play trailer */}
        <div className="movie-poster"></div>
        <MovieShortInfo movie={movie} />
        <MovieTabs movie={movie} />
      </MovieDetailsGrid>
    </Fragment>
  );
}

export default Movie;
