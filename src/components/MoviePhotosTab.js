import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import * as api from '../api';

import Modal from './Modal';

const modalRoot = document.getElementById("modal-root");

const MoviePhotosTab = ({ movie }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const el = useRef(null);

  useEffect(() => {
    el.current = document.createElement("div");
    modalRoot.appendChild(el.current);

    return () => {
      modalRoot.removeChild(el.current);
    }
  }, []);

  return (
    <StyledMoviePhotosTab>
      {movie.images.backdrops.map((image, idx) => (
        <ImageBox
          key={idx}
          className="image"
          imageUrl={`${api.imageBase}/w300/${image.file_path}`}
          onClick={() => {
            setSelectedImage(`${api.imageBase}/w1280/${image.file_path}`);
            setModalIsOpen(true)
          }}
        />
      ))}
      {modalIsOpen && ReactDOM.createPortal(
        <Modal
          onClose={() => setModalIsOpen(false)}
        >
          <img
            src={selectedImage}
            alt={`image from the movie ${movie.title}`}
            className="full-image"
          />
        </Modal>,
        el.current
      )}
    </StyledMoviePhotosTab>
  );
};

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
