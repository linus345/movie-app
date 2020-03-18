import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import * as api from '../api';

import MovieGrid from '../components/MovieGrid';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';


const Genre = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [err, setErr] = useState(null);
  const { genreId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const query = getQuery();
    getMovieByGenreId(genreId, query);
  }, [genreId, location]);

  const getQuery = () => new URLSearchParams(location.search);

  const getMovieByGenreId = async (genreId, query) => {
    try {
      const res = await api.getMoviesByGenreId(genreId, query);
      console.log("res: ", res);
      setMovies(res.data.results);
      setPage(res.data.page);
      setTotalPages(res.data["total_pages"]);
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

  return(
    <StyledGenre>
      <h1>Genre movies</h1>
      {err ? (
          <p>Error: {JSON.stringify(err)}</p>
        ) : (
          <>
            <MovieGrid>
              <MovieList movies={movies} />
            </MovieGrid>
            <Pagination page={page} totalPages={totalPages} />
          </>
        )
      }
    </StyledGenre>
  );
}

const StyledGenre = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Genre;
