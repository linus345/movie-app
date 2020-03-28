import React from 'react';

import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <>
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </>
);

export default MovieList
