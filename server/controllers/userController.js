'use strict';


const db = require('../models/');
db.sequelize.sync();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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
UserController.loginUser = function (req, res) {
    passport.use(new LocalStrategy({
        usernameField: 'userEmail'
    },
    (email, password, done) => {
        db.User.findOne({where:{userEmail: req.body.userEmail}})
        .then((err, user)=> {
            if (err) throw (err);

            if (user) {
                db.User.authenticate(password, (err, valid) => {
                    if (err) throw err;

                    if (valid) {
                        return done(null, user);
                    } else {
                        return done();
                    }
                });
            } else {
                return done();
            }
        });
    }));
};



module.exports = UserController;
