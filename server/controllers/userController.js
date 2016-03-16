'use strict';


var User = require('../models/user');

var UserController = {};

// Controls users registering as technicians
UserController.registerUser = function (req, res) {
    User.findOne({userEmail: req.body.userEmail}, (err, user) => {
        if (err) throw err;

        if (user) {
            alert('User already exists.');
      } else {
        User.create(req.body, (err) => {
          if (err) throw err;

          res.redirect('/login');
        });
      }
    });
}

module.exports = UserController;
