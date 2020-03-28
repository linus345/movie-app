import React from 'react';
import styled from 'styled-components';

import LoadMovies from './LoadMovies';

const MovieSimilarTab = ({ movie, mainEl }) => (
  <StyledMovieSimilarTab>
    <LoadMovies
      movies={movie.similar.results}
      loading={false}
      err={null}
      mainEl={mainEl}
    />
  </StyledMovieSimilarTab>
);

const StyledMovieSimilarTab = styled.div`
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  padding: 20px 10px 10px 10px;
`;

export default MovieSimilarTab;
