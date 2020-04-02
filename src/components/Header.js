import React from 'react';
import styled from 'styled-components';

import ToggleMenu from './ToggleMenu';

const Header = ({ isMenuOpen, setIsMenuOpen, children }) => (
  <StyledHeader>
    <ToggleMenu
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    />
    {children}
  </StyledHeader>
);

const StyledHeader = styled.div`
  grid-area: header;
  grid-template-columns: auto 1fr auto;
  background-color: ${props => props.theme.gray['800']};
  display: none;

  @media ${props => props.theme.breakpoints.tablet} {
    display: grid;
  }
`;

export default Header;
