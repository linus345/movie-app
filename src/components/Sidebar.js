import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faTimes, faFire, faStar, faCalendar, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import * as api from '../api';

import NavLink from './NavLink';
import tmdbLogo from '../images/tmdb-logo.svg';
import ToggleMenu from './ToggleMenu';

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const [genres, setGenres] = useState([]);
  const [err, setErr] = useState(null);

  const getGenres = async () => {
    try {
      const res = await api.getGenres();
      console.log("genres res: ", res);
      setGenres(res.data.genres);
    } catch(err) {
      if(err.response) {
        console.log("genres err res: ", err.response);
        setErr(err.response);
      } else {
        console.log("genres err: ", err);
        setErr(err);
      }
    }
  }

  useEffect(() => {
    getGenres();
  }, []);

  return (
    <StyledSidebar isMenuOpen={isMenuOpen}>
      <ToggleMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        className="toggle-menu"
      />
      <div className="discover">
        <NavLink
          to="/popular"
          icon={faFire}
          text="Popular"
          setIsMenuOpen={setIsMenuOpen}
        />
        <NavLink
          to="/top"
          icon={faStar}
          text="Top"
          setIsMenuOpen={setIsMenuOpen}
        />
        <NavLink
          to="/coming"
          icon={faCalendar}
          text="Coming"
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
      <div className="genres">
        <p className="nav-sub-heading">Genres</p>
        {genres.map(genre => (
          <NavLink
            key={genre.id}
            to={`/genre/${genre.id}`}
            icon={faCircleNotch}
            text={genre.name}
            setIsMenuOpen={setIsMenuOpen}
          />
        ))}
      </div>
      <div className="credit">
        <img src={tmdbLogo} alt="TMDb Logo" className="tmdb-logo" />
        <Link
          to="/credits"
          className="link"
          onClick={() => setIsMenuOpen(false)}
        >
          Credits
        </Link>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.aside`
  position: fixed;
  z-index: 2;
  grid-area: sidebar;
  height: 100vh;
  width: 205px;
  max-height: 100vh;
  background-color: ${props => props.theme.gray['800']};
  display: grid;
  grid-template-rows: 70px 0.5fr auto 2.5fr auto;
  transform: ${props => props.isMenuOpen ?
    "translateX(0px)" :
    "translateX(-205px)"};
  transition: transform 0.3s;

  .toggle-menu {
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
    overflow: scroll;

    .nav-sub-heading {
      color: white;
    }
  }

  .credit {
    grid-row: 5 / span 1;
    border-top: 2px solid ${props => props.theme.gray['700']};
    padding: 25px 15px;

    display: flex;
    flex-direction: column;

    .tmdb-logo {
      max-width: 70%;
    }

    .link {
      color: ${props => props.theme.white};
    }
  }
`;

export default Sidebar;
