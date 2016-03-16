'use strict';


import alt from '../alt';

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
