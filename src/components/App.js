import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './Layout';
import Sidebar from './Sidebar';

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
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout className="App">
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/" render={() => <p>home</p>} />
            <Route path="/popular" render={() => <p>popular</p>} />
            <Route path="/top" render={() => <p>top</p>} />
            <Route path="/coming" render={() => <p>coming</p>} />
            <Route path="/credits" render={() => <p>credits</p>} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
