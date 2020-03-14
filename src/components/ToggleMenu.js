import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const ToggleMenu = ({ isMenuOpen, setIsMenuOpen }) => (
  <StyledToggleMenu
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? (
      <FaIcon
        icon={faTimes}
        className="menu-icon"
      />
    ) : (
      <FaIcon
        icon={faBars}
        className="menu-icon"
      />
    )}
  </StyledToggleMenu>
);

const StyledToggleMenu = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.gray['800']};
  color: white;
  width: 46px;
  height: 46px;
  margin: 12px;
  border-radius: 4px;
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${props => props.theme.gray['700']};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: flex;
  }
`;

export default ToggleMenu;
