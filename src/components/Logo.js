import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Logo = props => (
  <StyledLogo {...props}>
    <FaIcon icon={faFilm} className="icon" />
    <h1 className="name">Movies</h1>
  </StyledLogo>
);

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 45px;
  border-bottom: 2px solid ${props => props.theme.gray['700']};

  .icon {
    text-align: center;
    color: ${props => props.theme.blue['700']};
    font-size: 27px;
    margin-right: 5px;
  }

  .name {
    text-align: center;
    color: ${props => props.theme.white};
  }
`;

export default Logo;
