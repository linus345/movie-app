import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as api from '../api';

import Button from './Button';

const MovieDetailsTab = ({ movie }) => (
  <StyledMovieDetailsTab>
    <p className="description">{movie.overview}</p>
    <div className="genres">
      {movie.genres.map(genre => (
        <Link
          key={genre.id}
          to={`/genre/${genre.id}`}
          className="genre-link"
        >
          {genre.name}
        </Link>
      ))}
    </div>
    <div className="links">
      <Button
        as="a"
        href={movie.homepage}
        target="_blank"
      >
        Website
      </Button>
      <Button
        as="a"
        href={`https://www.imdb.com/title/${movie.imdb_id}`}
        target="_blank"
      >
        IMDB
      </Button>
    </div>
  </StyledMovieDetailsTab>
);

const StyledMovieDetailsTab = styled.div`
  grid-row: 3 / span 1;
  max-width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  padding: 0px 10px 10px 10px;

  .description {
    grid-column: 1 / 3;
  }

  .genres {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    .genre-link {
      background-color: ${props => props.theme.blue["500"]};
      color: white;
      text-decoration: none;
      padding: 3px 5px;
      margin: 4px 4px 0 0;
      font-size: 13px;
      font-weight: 500;
      border-radius: 3px;
      transition: 0.2s;

      &:hover {
        background-color: ${props => props.theme.blue["600"]};
      }
    }
  }

  .links {
    justify-self: end;
    display: flex;

    ${Button} {
      &:first-child {
        margin-right: 8px;
      }
      margin: 0;
    }
  }
`;

export default MovieDetailsTab;
