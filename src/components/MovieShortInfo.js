import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons';

import Rating from './Rating';

const MovieShortInfo = ({ movie, isMobile }) => (
  <StyledMovieShortInfo>
    <div className="title-tagline">
      <h1 className="title">
        {movie.title.length >= 40 ? (
          <>{movie.title.substring(0, 36)}...</>
        ) : movie.title}
      </h1>
      <h4 className="tagline">{movie.tagline}</h4>
    </div>
    {!isMobile && (
      <div>
        <Rating average={movie.vote_average} />
        <div className="time-info">
          <p>
            <FaIcon
              icon={faCalendar}
              className="icon"
            />
            {new Date(movie.release_date).getFullYear()}
          </p>
          <p>
            <FaIcon
              icon={faClock}
              className="icon"
            />
            {movie.runtime} min
          </p>
        </div>
      </div>
    )}
  </StyledMovieShortInfo>
);

const StyledMovieShortInfo = styled.div`
  z-index: 1;
  grid-row: 2 / span 1;
  max-width: 100%;
  min-height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0) 5%, black);
  display: flex;
  padding: 20px;

  & > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;

    &:nth-child(2) {
      align-items: flex-end;
    }
  }

  ${props => props.isMobile && css`
    .title-tagline {
      grid-area: 1 / span 2;
    }
  `};

  .time-info {
    display: flex;
    p {
      margin: 4px 8px 0 8px;
      color: white;

      .icon {
        margin-right: 4px;
      }
    }
  }

  .title {
    margin: 15px 0 6px 0;
    color: white;
  }

  .tagline {
    margin: 0 0 5px 0;
    color: #ccc;
  }

  .languages {
    .language {
      display: inline-block;
      margin: 0 5px 4px 0;
      color: ${props => props.theme.gray["100"]};
      font-weight: 500;
    }
  }

`;

export default MovieShortInfo;
