import React from 'react';
import styled from 'styled-components';

import * as api from '../api';

const MoviePhotosTab = ({ movie }) => (
  <StyledMoviePhotosTab>
      {movie.images.backdrops.map((image, idx) => (
        <ImageBox
          key={idx}
          className="image"
          imageUrl={`${api.imageBase}/w300/${image.file_path}`}
        />
      ))}
  </StyledMoviePhotosTab>
);

const StyledMoviePhotosTab = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 5px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-top: none;
  padding: 20px 10px 10px 10px;
`;

const ImageBox = styled.div`
  position: relative;
  display: inline-block;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.4);
  }
`;

export default MoviePhotosTab;
