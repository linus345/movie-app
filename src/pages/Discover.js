import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import * as api from '../api';

import LoadMovies from '../components/LoadMovies';

const Discover = ({ mainEl }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);
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
      setLoading(true);
      const res = await api.discoverMovies(by, query);
      console.log("res: ", res);
      setMovies(res.data.results);
      setPage(res.data.page);
      setTotalPages(res.data["total_pages"]);
    } catch(err) {
      if(err.response) {
        console.log("this err res: ", err.response);
        setErr({ ...err.response, status: err.response.status });
      } else {
        console.log("this err: ", err);
        setErr(err);
      }
    } finally {
      setLoading(false);
    }
  }

  if(err && err.status === 404) {
    return <Redirect to="/404" />
  }

  return(
    <StyledDiscover>
      <h1 className="title">{by}</h1>
      <LoadMovies
        movies={movies}
        loading={loading}
        err={err}
        page={page}
        totalPages={totalPages}
        mainEl={mainEl}
      />
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
