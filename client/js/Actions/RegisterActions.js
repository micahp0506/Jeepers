'use strict';


import alt from '../utils/alt';

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
    $.ajax({
      type: 'POST',
      url: '/api/user/create',
      data: { userEmail: email, userPassword: password }
    })
      .done((data) => {
        this.actions.registerSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.registerFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(RegisterActions);
