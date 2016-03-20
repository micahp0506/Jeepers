'use strict';


import alt from '../utils/alt';
import RegisterActions from '../actions/LoginActions';

// Creating register store constructor
class LoinStore {
  constructor() {
    this.bindActions(LoginActions);
    this.email = '';
    this.password = '';
    this.helpBlock = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
  }

  // Handling the successful login of new user
  onloginSuccess(successMessage) {
    console.log("store this", this);
    this.emailValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  // Handling the failure to login of new user
  onloginFail(errorMessage) {
    console.log("error", errorMessage);
    this.emailValidationState = 'has-error';
    this.helpBlock = errorMessage;
    alert("Email or password is not correct. Please try again.")
  }

  // Handling no email provided by user
  onnoEmail() {
    this.emailValidationState = 'has-error';
    this.helpBlock = 'Please enter an email.';
  }

  // Handling no password provided by user
  onnoPassword() {
    this.passwordValidationState = 'has-error';
    this.helpBlock = 'Please enter a password';
  }

}

export default alt.createStore(LoginStore);
