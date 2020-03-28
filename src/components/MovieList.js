import React from 'react';

import MovieCard from './MovieCard';

const MovieList = ({ movies, mainEl }) => {
  const scrollToTop = el => {
    if("scrollTo" in el.current) {
      el.current.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      el.current.scrollTop = 0;
    }
  }

  return(
    <>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={() => {
            console.log("when is this called");
            scrollToTop(mainEl)
          }}
        />
      ))}
    </>
  );
};

export default MovieList
