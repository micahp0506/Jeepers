'use strict';


import alt from '../utils/alt';
import {browserHistory} from "react-router";
import $ from '../../bower_components/jquery/dist/jquery.min.js'

// Creating constructor to handle different states
class RegisterActions {
  constructor() {
    this.generateActions(
      'registerSuccess',
      'registerFail',
      'newEmail',
      'newPassword',
      'noEmail',
      'noPassword',
      'doesNotMatch'
    );
  }
  // Making POST call to DB to add new user info
  addUser(email, password) {
    console.log(email, password);
    $.ajax({
      type: 'POST',
      url: '/api/user/create',
      data: { userEmail: email, userPassword: password }
    })
      .done((data) => {
        browserHistory.pushState('/login');
        console.log("message", data.message);
        this.registerSuccess(data.message);
      })
      .fail((jqXhr) => {
        // console.log("this", this);
        console.log("jqXhr", jqXhr.message);
        this.registerFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(RegisterActions);
