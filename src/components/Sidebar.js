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
  background-color: ${props => props.theme.gray['800']};
  display: grid;
  grid-template-rows: 70px 0.5fr auto 2.5fr auto;

  .logo {
    grid-row: 1 / span 1;
  }

  .discover {
    grid-row: 3 / span 1;
    margin: 0px 15px 40px 15px;
    display: flex;
    flex-direction: column;
  }

  .genres {
    grid-row: 4 / span 1;
    margin: 0px 15px;
    display: flex;
    flex-direction: column;

    .nav-sub-heading {
      color: white;
    }
  }

  .credit {
    grid-row: 5 / span 1;
  }
`;

export default Sidebar;
