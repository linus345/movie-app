import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div className="logo">
        <h1>Movies</h1>
      </div>
      <div className="discover">
        <NavLink to="/popular">Popular</NavLink>
        <NavLink to="/top">Top</NavLink>
        <NavLink to="/coming">Coming</NavLink>
      </div>
      <div className="genres">
        <p>Popular genres</p>
        <NavLink to="/action">Action</NavLink>
        <NavLink to="/drama">Drama</NavLink>
        <NavLink to="/scifi">Sci-Fi</NavLink>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.aside`
  grid-area: sidebar;
  min-height: 100%;
  display: grid;
  grid-template-rows: 70px 1fr 1fr;
`;

export default Sidebar;
