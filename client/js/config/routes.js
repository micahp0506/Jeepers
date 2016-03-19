'use strict'

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import createBrowserHistory from 'history/lib/createBrowserHistory';
const history = createBrowserHistory();
import { Router, IndexRoute, Route, browserHistory } from 'react-router';

export default (
  <Router history={history}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
  </Router>
)
