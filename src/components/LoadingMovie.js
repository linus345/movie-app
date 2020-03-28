import React from 'react';
import styled from 'styled-components';

const LoadingMovie = () => (
  <>
    <MovieBackdropPlaceholder />
    <MovieDetailsTextPlaceholder />
    <MovieDetailsTextPlaceholder />
  </>
);

const MovieBackdropPlaceholder = styled.div`
  width: 100%;
  height: 450px;
  padding: 3px;
  border-radius: 5px;
  background-color: #CDCDCD;
`;

const MovieDetailsTextPlaceholder = styled.div`
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: #CDCDCD;
  margin-top: 10px;
`;

export default LoadingMovie;
