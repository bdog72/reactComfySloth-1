/* eslint-disable no-unused-vars */
//
//

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Home1 from './Home1';
import Home2 from './Home2';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/home1'>
          <Home1 />
        </Route>
        <Route path='/home2'>
          <Home2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
