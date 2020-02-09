import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Sidebar from './Sidebar';

const theme = {
  red: "#ff0000",
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <p>home</p>} />
            <Route path="/credits" render={() => <p>credits</p>} />
          </Switch>
        </Router>
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}

export default App;
