import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import * as api from '../api';

import LoadMovies from '../components/LoadMovies';
import CustomError from '../components/CustomError';

const Genre = ({ mainEl }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const { genreId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const query = getQuery();
    getMovieByGenreId(genreId, query);
  }, [genreId, location]);

  const getQuery = () => new URLSearchParams(location.search);

  const getMovieByGenreId = async (genreId, query) => {
    try {
      setLoading(true);
      const res = await api.getMoviesByGenreId(genreId, query);
      console.log("res: ", res);
      // api doesn't respond with an error even when an invalid genre id is
      // given so an explicit check is needed to throw an error
      if(res.data.total_results === 0) {
        throw Error("Invalid genre id");
      }
      setMovies(res.data.results);
      setPage(res.data.page);
      setTotalPages(res.data["total_pages"]);
    } catch(err) {
      if(err.response) {
        console.log("genre err res: ", err.response);
        if(err.response.data.errors.length > 0) {
          setErr({ ...err.response, message: err.response.data.errors[0] });
        } else {
          setErr(err.response);
        }
      } else {
        setErr(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return(
    <StyledGenre>
      <h1>Genre movies</h1>
      {err ? (
        <CustomError>
          <p>{err.message || "Something went wrong"}</p>
        </CustomError>
      ) : (
        <LoadMovies
          movies={movies}
          loading={loading}
          err={err}
          page={page}
          totalPages={totalPages}
          mainEl={mainEl}
        />
      )}
    </StyledGenre>
  );
}

const StyledGenre = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Genre;
