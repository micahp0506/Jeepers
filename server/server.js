'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const passport = require('passport');
const flash = require('connect-flash');
const routes = require('./routes');

const app = express();
// Defining PORT, 3000 or process.env
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET || 'secret';


app.use(express.static(path.join(__dirname,'..', 'client/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: SESSION_SECRET,
  store: new RedisStore()
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(routes);


app.listen(PORT, () => {
    console.log(__dirname)
  console.log(`Node.js server has started. Listening on port ${PORT}`);
  });
