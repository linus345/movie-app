import React from 'react';
import styled from 'styled-components';

const Modal = ({ children, onClose }) => (
  <StyledModal onClick={onClose}>
    <div className="inner-modal">
      {children}
    </div>
  </StyledModal>
);

const StyledModal = styled.div`
  z-index: 1000;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .inner-modal {
    background-color: white;
    padding: 4px;
    border-radius: 4px;
    width: 80vw;

    img {
      width: 100%;
    }
  }
`;

export default Modal;
