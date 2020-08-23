import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import * as api from '../api';

import Button from './Button';
import defaultProfile from '../images/default-profile.svg';

// TODO:
// Add link to /actor/:id
// Link on name or add a "read more" button
const MovieCastTab = ({ movie, isMobile }) => (
  <StyledMovieCastTab isMobile={isMobile}>
    {movie.credits.cast < 1 ? (<p>No cast found</p>) : (
      movie.credits.cast.map(actor => (
        <ActorCard key={actor.id}>
          <ActorProfilePicture
            className="actor-photo"
            imageUrl={actor.profile_path ? (
              `${api.imageBase}/w185${actor.profile_path}`
            ) : defaultProfile}
          />
          <div className="actor-info">
            <p className="actor-name">{actor.name}</p>
            <p className="actor-role">as <span>{actor.character}</span></p>
            <Button
              small={1}
              as={Link}
              to={`/actor/${actor.id}`}
            >
              Read more</Button>
          </div>
        </ActorCard>
      ))
    )}
  </StyledMovieCastTab>
);

const StyledMovieCastTab = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 8px;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  padding: 20px 10px 10px 10px;

  ${props => props.isMobile && css`
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  `}
`;

const ActorCard = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  padding: 8px 10px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.2);

  .actor-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;

    p {
      margin: 0;
    }

    .actor-name {
      font-size: 22px;
      font-weight: 500;
      margin-bottom: 2px;
    }

    .actor-role {
      color: #333;
      span {
        font-weight: 600;
      }
    }

    ${Button} {
      margin: 0;
      margin-top: auto;
      align-self: flex-end;
    }
  }
`;

const ActorProfilePicture = styled.div`
    background-image: url(${props => props.imageUrl});
    background-size: cover;
    background-position: top center;
    border-radius: 4px;
    width: auto;
    height: 100px;
`;

export default MovieCastTab;
