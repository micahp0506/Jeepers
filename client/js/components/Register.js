'use strict';


import React from 'react';

export default React.createClass({
  render() {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui black image header">
                    <div className="content">
                        Register as a New User
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
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Confirm Password">
                                </input>
                            </div>
                        </div>
                        <div className="ui fluid large black submit button">Register</div>
                    </div>
                    <div className="ui error message"></div>
                </form>
            </div>
        </div>
    )
  }
})
