'use strict';


import alt from '../utils/alt';
import RegisterActions from '../actions/RegisterActions';

// Creating register store constructor
class RegisterStore {
  constructor() {
    this.bindActions(RegisterActions);
    this.email = '';
    this.helpBlock = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
  }

  // Handling the registration of new user
  onregisterSuccess(successMessage) {
    this.emailValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  // Handling the failure to register of new user
  onregisterFail(errorMessage) {
    console.log("error", errorMessage);
    this.emailValidationState = 'has-error';
    // this.helpBlock = errorMessage;
    alert("User already exists.")
  }

  // Binding provided email
  onnewEmail(event) {
    this.email = event.target.value;
    this.emailValidationState = '';
  }

  // Binding provided hashed password
  onnewPassword(event) {
    this.password = event.target.value;
    this.passwordValidationState = '';
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

  // Handling the passwords not matching
  ondoesNotMatch() {
    this.passwordValidationState = 'has-error';
    this.helpBlock = 'Passwords do not match.';
  }
}

export default alt.createStore(RegisterStore);
