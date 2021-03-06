'use strict';


import alt from '../utils/alt';
import RegisterActions from '../actions/RegisterActions';

// Creating register store constructor
class RegisterStore {
  constructor() {
    this.bindActions(RegisterActions);
    this.email = '';
    this.password = '';
    this.helpBlock = '';
    this.emailValidationState = '';
    this.passwordValidationState = '';
  }

  // Handling the successful login of new user
  onregisterSuccess(successMessage) {
    console.log("store this", this);
    this.emailValidationState = 'has-success';
    this.helpBlock = successMessage;
  }

  // Handling the failure to login of new user
  onregisterFail(errorMessage) {
    console.log("error", errorMessage);
    this.emailValidationState = 'has-error';
    this.helpBlock = errorMessage;
    alert("Email or password is not correct. Please try again.")
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
