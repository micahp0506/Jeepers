
'use strict'

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Login from '../components/Login';
import { Router, IndexRoute, Route, browserHistory } from 'react-router'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
    </Route>
    <Route path="/login" component={Login}></Route>
  </Router>
)
