'use strict';


const db = require('../models/');
db.sequelize.sync();

const UserController = {};

// Controls users registration as a new user
UserController.registerUser = function (req, res, done) {
    console.log("controller in");
    db.User.findOne({where:{userEmail: req.body.userEmail}})
        .then((existingUser)=> {
            if (existingUser) {
                return done(null, false, res.send('signupMessage', 'That email is already taken.'));
            } else {
                let newUser = db.User.build({
                    userEmail: req.body.userEmail,
                    userPassword: db.User.generateHash(req.body.userPassword)
                });
                newUser.save()
                    .done(function() {
                        return done(null, newUser)
                    })
                    .catch(function(){
                        return done(null, false, res.status('loginMessage', err));
                    });
                }
        })
        .catch(function(e) {
            console.log(e);
            return done(null, false, res.status('loginMessage',e.name + " " + e.message));
        });
};

// Controls the logging in of a user
UserController.loginUser = function () {}


module.exports = UserController;
