'use strict';


const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');


router.post('/api/user/create', userController.registerUser);
router.post('/api/user', userController.loginUser);

module.exports = router;
