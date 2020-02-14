import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as api from '../api';

const Movie = ({ location }) => {
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
    <h1>{movie.title}</h1>
  );
}

export default Movie;
