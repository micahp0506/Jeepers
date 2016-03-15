'use strict'

import React from 'react'
import '../Styles/HomeStyles.css';

export default React.createClass({
  render() {
    return (
      <div className="main-container">
        {this.props.children}
      </div>
    )
  }
})
