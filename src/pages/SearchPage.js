import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import * as api from '../api';

import LoadMovies from '../components/LoadMovies';
import LoadingMovies from '../components/LoadingMovies';

const SearchPage = ({ location, mainEl }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
  const { searchQuery } = useParams();

  useEffect(() => {
    const getQuery = () => new URLSearchParams(location.search);
    const query = getQuery();
    fetchMovies(searchQuery, query);
  }, [location]);

  const fetchMovies = async (searchQuery, query) => {
    try {
      setLoading(true);
      const res = await api.searchMovies(searchQuery, query);
      console.log("search res: ", res);
      setMovies(res.data.results);
      setPage(res.data.page);
      setTotalPages(res.data["total_pages"]);
    } catch(err) {
      if(err.response) {
        console.log("search err res: ", err.response);
        setErr(err.response);
      } else {
        console.log("search err: ", err);
        setErr(err);
      }
    } finally {
      setLoading(false);
    }
  }

  return(
    <StyledSearchPage>
      <h1>Search results</h1>
      <LoadMovies
        movies={movies}
        loading={loading}
        err={err}
        page={page}
        totalPages={totalPages}
        mainEl={mainEl}
      />
    </StyledSearchPage>
  );
}

const StyledSearchPage = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SearchPage;
