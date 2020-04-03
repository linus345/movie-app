import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// pages
import Credits from '../pages/Credits';
import Discover from '../pages/Discover';
import Movie from '../pages/Movie';
import Genre from '../pages/Genre';
import Actor from '../pages/Actor';
import SearchPage from '../pages/SearchPage';

// components
import Layout from './Layout';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';
import Overlay from './Overlay';
import Search from './Search';

const theme = {
  black: "#000000",
  white: "#ffffff",
  gray: {
    100: "#F7FAFC",
    200: "#EDF2F7",
    300: "#E2E8F0",
    400: "#CBD5E0",
    500: "#A0AEC0",
    600: "#718096",
    700: "#4A5568",
    800: "#2D3748",
    900: "#1A202C",
  },
  blue: {
    100: "#EBF8FF",
    200: "#BEE3F8",
    300: "#90CDF4",
    400: "#63B3ED",
    500: "#4299E1",
    600: "#3182CE",
    700: "#2B6CB0",
    800: "#2C5282",
    900: "#2A4365",
  },
  breakpoints: {
    mobile: "(max-width: 575px)",
    tablet: "(max-width: 996px)",
  },
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 996);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 996);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);
  const mainEl = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleResize = () => {
    if(window.innerWidth <= 575) {
      setIsMenuOpen(false);
      setIsMobile(true);
      // both tablet and mobile can be true at the same time
      // this is to prevent having to check for both mobile
      // and tablet when it's unnecessary
      setIsTablet(true);
    } else if(window.innerWidth <= 996) {
      setIsMenuOpen(false);
      setIsMobile(false);
      setIsTablet(true);
    } else {
      setIsMenuOpen(true);
      setIsMobile(false);
      setIsTablet(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout className="App">
        <Router>
          <Header
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          >
            {isTablet && <Search isTablet={isTablet} />}
          </Header>
          {!isTablet && <Search isTablet={isTablet} />}
          <Sidebar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isTablet={isTablet}
          />
          {/* Overlay only shows when sidebar is open on small screens */}
          <Overlay
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(false)}
          />
          <Main ref={mainEl}>
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/discover/popular" />}
              />
              <Route
                exact
                path="/discover/:by"
                render={() => <Discover mainEl={mainEl} />}
              />
              <Route
                path="/credits"
                component={Credits}
              />
              <Route
                path="/movie/:movieId"
                render={props => (
                  <Movie
                    isMobile={isMobile}
                    mainEl={mainEl}
                    {...props}
                  />
                )}
              />
              <Route
                path="/genre/:genreId"
                render={() => <Genre mainEl={mainEl} />}
              />
              <Route
                path="/actor/:actorId"
                render={props => (
                  <Actor
                    isMobile={isMobile}
                    mainEl={mainEl}
                    {...props} />
                )}
              />
              <Route
                path="/search/:searchQuery"
                render={props => <SearchPage mainEl={mainEl} {...props} />}
              />
            </Switch>
          </Main>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
