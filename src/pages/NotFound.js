import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <StyledNotFound>
      <h1>404</h1>
      <p>Page not found. <Link to="/">Go back</Link> to the homepage</p>
    </StyledNotFound>
  );
}

const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  h1 {
    font-size: 55px;
    margin: 140px 0 10px 0;
  }

  p {
    color: #333;
    text-align: center
  }
`;

export default NotFound;
