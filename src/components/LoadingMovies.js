import React from 'react';
import styled from 'styled-components';

import MovieGrid from './MovieGrid';

const LoadingMovies = () => (
  <MovieGrid>
    {Array.from(Array(20).keys()).map(i => (
      <MoviePlaceholder key={i} />
    ))}
  </MovieGrid>
);

const MoviePlaceholder = styled.div`
  width: 100%;
  height: 320px;
  padding: 3px;
  border-radius: 5px;
  background-color: #CDCDCD;
`;

export default LoadingMovies;
