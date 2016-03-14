'use strict'

import React from 'react';
import { Button } from 'react-bootstrap';



export default React.createClass({
  render() {
    return (
        <div>
            <input type="text" value="Hello!" />
            <Button bsStyle="primary">Primary</Button>
        </div>
    )
  }
})
