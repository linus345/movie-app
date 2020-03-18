import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// pages
import Credits from '../pages/Credits';
import Discover from '../pages/Discover';
import Movie from '../pages/Movie';
import Genre from '../pages/Genre';

// components
import Layout from './Layout';
import Main from './Main';
import Header from './Header';
import Sidebar from './Sidebar';
import Overlay from './Overlay';

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
    tablet: "(max-width: 996px)",
  },
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 996);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 996);
  const mainEl = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleResize = () => {
    if(window.innerWidth <= 996) {
      setIsMenuOpen(false);
      setIsMobile(true);
    } else {
      setIsMenuOpen(true);
      setIsMobile(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout className="App">
        <Router>
          <Header
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Sidebar
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isMobile={isMobile}
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
                component={Movie}
              />
              <Route
                path="/genre/:genreId"
                render={() => <Genre mainEl={mainEl} />}
              />
            </Switch>
          </Main>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
