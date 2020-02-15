import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faFire, faStar, faCalendar, faCircleNotch } from '@fortawesome/free-solid-svg-icons';

import * as api from '../api';

import Logo from './Logo';
import NavLink from './NavLink';
import tmdbLogo from '../images/tmdb-logo.svg';

const Sidebar = () => {
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
    <StyledSidebar>
      <Logo className="logo" />
      <div className="discover">
        <NavLink
          to="/popular"
          icon={faFire}
          text="Popular"
        />
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
      </div>
      <div className="genres">
        <p className="nav-sub-heading">Genres</p>
        {genres.map(genre => (
          <NavLink
            key={genre.id}
            to={`/genre/${genre.id}`}
            icon={faCircleNotch}
            text={genre.name}
          />
        ))}
      </div>
      <div className="credit">
        <img src={tmdbLogo} alt="TMDb Logo" className="tmdb-logo" />
        <Link to="/credits" className="link">Credits</Link>
      </div>
    </StyledSidebar>
  );
}

const StyledSidebar = styled.aside`
  grid-area: sidebar;
  max-height: 100vh;
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
