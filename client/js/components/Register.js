'use strict';


import React from 'react';
import RegisterStore from '../stores/RegisterStore';
import RegisterActions from '../actions/RegisterActions';

// Creating Register to handle actions and store
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = RegisterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  // Listening to changes at the store
  componentDidMount() {
    RegisterStore.listen(this.onChange);
  }

  // Unlistening to changes at the store
  componentWillUnmount() {
    RegisterStore.unlisten(this.onChange);
  }

  // When change occurs handle state
  onChange(state) {
    this.setState(state);
  }

  // Handling submit onf users info
  handleSubmit(event) {
    event.preventDefault();

    // Email and Password provided bu user
    let email = this.state.email;
    let password = this.state.password;

    // If no email provided
    if (!email) {
      RegisterActions.noEmail();
      this.refs.nameTextField.getDOMNode().focus();
    }

    // If no password provided
    if (!password) {
      RegisterActions.noPassword();
    }

    // If passwords do not match
    if (password !== confirmPassword) {
      RegisterActions.doesNotmatch();
    }

    // Handling registration of new user
    if (email && password) {
      RegisterActions.addUser(email, password);
    }
  }

  // Rendering HTML
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
                                <input type="text" name="email" placeholder="E-mail address" value={this.state.email}
                           onChange={RegisterActions.newEmail}
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <i className="lock icon"></i>
                                <input type="password" name="password" placeholder="Password" value={this.state.password}
                           onChange={RegisterActions.newPassword}>
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
                        <div className="ui fluid large black submit button" onSubmit={this.handleSubmit.bind(this)}>>Register</div>
                    </div>
                    <div className="ui error message"></div>
                </form>
            </div>
        </div>
    )
  }
})

export default Register;
