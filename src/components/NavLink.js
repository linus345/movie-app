import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon as FaIcon } from '@fortawesome/react-fontawesome';

const NavLink = ({ to, icon, text }) => (
  <StyledNavLink to={to} activeClassName="active">
    <FaIcon icon={icon} className="fa-fw icon" />
    {text}
  </StyledNavLink>
);

const StyledNavLink = styled(RouterNavLink)`
  color: ${props => props.theme.gray['200']};
  text-decoration: none;
  padding: 10px 18px;
  margin: 5px 0px;
  border-radius: 5px;
  &:hover {
    background-color: ${props => props.theme.gray['700']};
  }

  &.active {
    background-color: ${props => props.theme.blue['500']};
  }

  .icon {
    margin-right: 10px;
  }
`;

export default NavLink;
