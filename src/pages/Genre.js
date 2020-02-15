import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as api from '../api';

import MovieGrid from '../components/MovieGrid';
import MovieList from '../components/MovieList';


const Genre = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);
  const [err, setErr] = useState(null);

  const getMovieByGenreId = async (genreId) => {
    try {
      const res = await api.getMoviesByGenreId(genreId);
      console.log("res: ", res);
      setMovies(res.data.results);
    } catch(err) {
      if(err.response) {
        console.log("err res: ", err.response);
        setErr(err.response);
      } else {
        console.log("err: ", err);
        setErr(err);
      }
    }
  }

  useEffect(() => {
    getMovieByGenreId(genreId);
  }, [genreId]);

  return(
    <div>
      <h1>Genre movies</h1>
      {err ? (
          <p>Error: {JSON.stringify(err)}</p>
        ) : (
          <MovieGrid>
            <MovieList movies={movies} />
          </MovieGrid>
        )
      }
    </div>
  );
}

export default Genre;
