'use strict';


const express = require('express');
const router = express.Router();
const userController = require('./controllers/useController');


router.post('/api/user/create', userController.registerUser);
