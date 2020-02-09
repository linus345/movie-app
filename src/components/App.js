import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Layout from './Layout';
import Sidebar from './Sidebar';

const theme = {
  red: "#ff0000",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout className="App">
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path="/" render={() => <p>home</p>} />
            <Route path="/credits" render={() => <p>credits</p>} />
          </Switch>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
