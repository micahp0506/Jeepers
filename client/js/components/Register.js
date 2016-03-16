'use strict';


import React from 'react';
import RegisterStore from '../stores/RegisterStore';
import RegisterActions from '../actions/RegisterActions';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = RegisterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    RegisterStore.listen(this.onChange);
  }

  componentWillUnmount() {
    RegisterStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let email = this.state.email;
    let password = this.state.password;

    if (!email) {
      RegisterActions.noEmail();
      this.refs.nameTextField.getDOMNode().focus();
    }

    if (!password) {
      RegisterActions.noPassword();
    }

    if (password !== confirmPassword) {
      RegisterActions.doesNotmatch();
    }

    if (email && password) {
      RegisterActions.addUser(email, password);
    }
  }

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
