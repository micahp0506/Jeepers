'use strict';


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('/routes');

// Defining PORT, 3000 or process.env
const PORT = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'..', 'client/public')));
app.use('routes');

app.listen(PORT, () => {
    console.log(__dirname)
  console.log(`Node.js server has started. Listening on port ${PORT}`);
  });
