'use strict';


import alt from '../utils/alt';
import $ from '../../bower_components/jquery/dist/jquery.min.js';


// Creating constructor to handle different states
class LoginActions {
  constructor() {
    this.generateActions(
      'loginSuccess',
      'loginFail',
      'noEmail',
      'noPassword'
    );
  }

  // Making POST call to DB to add new user info
  loginUser(email, password) {
    $.ajax({
      type: 'GET',
      url: '/api/user',
      data: { userEmail: email, userPassword: password }
    })
      .done((data) => {
        console.log("data", data);
        console.log("this", this);
        this.registerSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.registerFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(LoginActions);
