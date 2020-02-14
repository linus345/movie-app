import React from 'react';
import styled from 'styled-components';

const MovieCard = ({
  movie: {
    title, vote_count, poster_path, overview
  },
  imageBase
}) => {
  return(
    <StyledMovieCard>
      <img src={`${imageBase}/w342/${poster_path}`} alt="movie poster" />
      <div className="info">
        <h3>{title}</h3>
      </div>
    </StyledMovieCard>
  );
}

const StyledMovieCard = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  padding: 3px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.5);
    transform: translateY(-6px);

    .info {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .info {
    border-radius: 5px;
    background-color: white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    padding: 0 5px;
    width: 90%;
    max-width: 90%;
    text-align: center;
    position: absolute;
    left: 50%;
    bottom: 10px;
    opacity: 0;
    transform: translateX(-50%);
    transition: 0.6s;
  }
`;

export default MovieCard;
