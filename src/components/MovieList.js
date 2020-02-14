import React, { Fragment } from 'react';

import * as api from '../api';

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <Fragment>
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} imageBase={api.imageBase} />
    ))}
  </Fragment>
);

export default MovieList
