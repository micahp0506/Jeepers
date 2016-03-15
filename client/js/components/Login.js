'use strict';


import React from 'react';

export default React.createClass({
  render() {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui black image header">
                    <div className="content">
                        Log-in to your account
                    </div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="user icon"></i>
                                <input type="text" name="email" placeholder="E-mail address">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password">
                                </input>
                            </div>
                        </div>
                        <div className="ui fluid large black submit button">Login</div>
                    </div>
                    <div className="ui error message"></div>
                </form>
            <div className="ui message">
                New to us? <a href="#">Sign Up</a>
            </div>
        </div>
    </div>
    )
  }
})
