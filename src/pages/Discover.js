import React, { useState, useEffect } from 'react';
import { Redirect, useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import * as api from '../api';

import MovieGrid from '../components/MovieGrid';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';

const Discover = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [err, setErr] = useState(null);
  const { by } = useParams();
  const location = useLocation();

  useEffect(() => {
    const query = getQuery();
    // call api to get movies
    fetchMovies(by, query);
  }, [location]);

  const getQuery = () => new URLSearchParams(location.search);

  const fetchMovies = async (by, query) => {
    try {
      const res = await api.discoverMovies(by, query);
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
    <StyledDiscover>
      <h1 className="title">{by}</h1>
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
    </StyledDiscover>
  );
}

const StyledDiscover = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    text-transform: capitalize;
  }
`;

export default Discover;