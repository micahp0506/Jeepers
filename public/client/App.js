'use strict'

import React from 'react'
import Router from 'react-router'
import ReactDOM from 'react-dom'
import routes from './config/routes'

ReactDOM.render((
  <Router>
    {routes}
  </Router>
), document.getElementById('app'))
