import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as api from '../api';

import MovieGrid from '../components/MovieGrid';
import MovieCard from '../components/MovieCard';

const Top = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [err, setErr] = useState(null);

  const getTop = async () => {
    try {
      const res = await api.getTop();
      console.log("res: ", res);
      setMovies(res.data.results);
      setPage(res.data.page);
      setTotalPages(res.data['total_pages']);
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
    // call api to get top movies
    getTop();
  }, []);

  return (
    <div>
      <h1>Top</h1>
      {err ? (
          <p>Error: {JSON.stringify(err)}</p>
        ) : (
          <MovieGrid>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} imageBase={api.imageBase} />)}
          </MovieGrid>
        )
      }
    </div>
  );
}

export default Top;
