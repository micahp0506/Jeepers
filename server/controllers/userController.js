'use strict';


const db = require('../models/');
db.sequelize.sync();

const UserController = {};

// Controls users registering as technicians
UserController.registerUser = function (req, res, done) {
    console.log("controller in");
    db.User.findOne({where:{userEmail: req.body.userEmail}})
        .then((existingUser)=> {
            if (existingUser) {
            return done(null, false, res.status('signupMessage', 'That email is already taken.'));
            } else {
                let newUser = db.User.build({
                    userEmail: req.body.userEmail,
                    userPassword: db.User.generateHash(req.body.userPassword)
                });
                newUser.save()
                    .then(function() {
                        return done(null, newUser)
                    })
                    .catch(function(){
                        return done(null, false, res.status('loginMessage', err));});
                    }
        })
        .catch(function(e) {
            console.log(e);
            return done(null, false, res.status('loginMessage',e.name + " " + e.message));
        })
};


module.exports = UserController;
