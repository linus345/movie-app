import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => (
  <StyledLoading>
    <span></span>
    <span></span>
    <span></span>
  </StyledLoading>
);


const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
`;

const StyledLoading = styled.div`
  margin: auto;
  display: flex;
  position: relative;

  span {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #3498db;
    margin: 35px 5px;
  }

  span:nth-child(1) {
    animation: ${bounce} 1s ease-in-out infinite;
  }

  span:nth-child(2) {
    animation: ${bounce} 1s ease-in-out 0.2s infinite;
  }

  span:nth-child(3) {
    animation: ${bounce} 1s ease-in-out 0.4s infinite;
  }
`;

export default Loading;
