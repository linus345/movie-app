import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import LoadingMovies from './LoadingMovies';
import MovieGrid from './MovieGrid';
import MovieList from './MovieList';
import Pagination from './Pagination';

const LoadMovies = ({ movies, loading, err, page, totalPages, mainEl }) => {
  // TODO: useEffect to update movie whenever location changes
  const location = useLocation();

  useEffect(() => {
    console.log("useEffect, location changed in LoadMovies");
  }, [location]);

  return(
    <>
      {loading ? <LoadingMovies /> : err ? (
          <p>Error: {JSON.stringify(err)}</p>
        ) : (
          <>
            <MovieGrid>
              <MovieList movies={movies} />
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
        )
      }
    </>
  );
};

export default LoadMovies;
