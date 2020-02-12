import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as api from '../api';

import MovieCard from '../components/MovieCard';

const Popular = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [err, setErr] = useState(null);

  const getPopular = async () => {
    try {
      const res = await api.getPopular();
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
    // call api to get popular movies
    getPopular();
  }, []);

  return(
    <div>
      <h1>Popular</h1>
      {err ? (
          <p>Error: {JSON.stringify(err)}</p>
        ) : (
          <div>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        )
      }
    </div>
  );
}

export default Popular;
