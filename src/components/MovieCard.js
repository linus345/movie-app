import React from 'react';
import styled from 'styled-components';

const MovieCard = ({ movie: { title, vote_count } }) => {
  return(
    <StyledMovieCard>
      <h3>{title}</h3>
    </StyledMovieCard>
  );
}

const StyledMovieCard = styled.div`

`;

export default MovieCard;
