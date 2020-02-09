import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faFire, faStar, faCalendar, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import Logo from './Logo';
import NavLink from './NavLink';

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo className="logo" />
      <div className="discover">
        <NavLink
          to="/top"
          icon={faStar}
          text="Top"
        />
        <NavLink
          to="/coming"
          icon={faCalendar}
          text="Coming"
        />
        <NavLink
          to="/popular"
          icon={faFire}
          text="Popular"
        />
      </div>
      <div className="genres">
        <p className="nav-sub-heading">Popular genres</p>
        <NavLink
          to="/action"
          icon={faCircleNotch}
          text="Action"
        />
        <NavLink
          to="/drama"
          icon={faCircleNotch}
          text="Drama"
        />
        <NavLink
          to="/scifi"
          icon={faCircleNotch}
          text="Sci-Fi"
        />
      </div>
      <div className="credit">
        <Link to="/credits">Credits</Link>
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
