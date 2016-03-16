'use strict'

import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import routes from './config/routes';
import $ from '../bower_components/jquery/dist/jquery.min.js';
import '../bower_components/semantic/dist/semantic.min.css';


ReactDOM.render((
  <Router>
    {routes}
  </Router>
), document.getElementById('app'))
