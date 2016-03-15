'use strict'

import React from 'react'
import Navbar from './Navbar';
import '../Styles/HomeStyles.css';


export default React.createClass({
  render() {
    return (
        <div className="ui grid">
            <Navbar />
            <div className="main-container">
                {this.props.children}
            </div>
        </div>
    )
  }
})
