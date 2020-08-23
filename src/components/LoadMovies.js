import React from 'react';

import LoadingMovies from './LoadingMovies';
import MovieGrid from './MovieGrid';
import MovieList from './MovieList';
import Pagination from './Pagination';

const LoadMovies = ({ movies, loading, err, page, totalPages, mainEl }) => {
  console.log("rendering LoadMovies");
  return(
    <>
      {loading ? <LoadingMovies /> : movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        <>
          <MovieGrid>
            <MovieList movies={movies} mainEl={mainEl} />
          </MovieGrid>
          {page &&
            totalPages &&
            mainEl &&
            <Pagination
              page={page}
              totalPages={totalPages}
              mainEl={mainEl}
            />
          }
        </>
      )}
    </>
  );
};

export default LoadMovies;
