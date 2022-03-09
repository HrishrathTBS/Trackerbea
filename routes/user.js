const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');
const usersController = require('../controller/userController');

router.post('/signup', usersController.signup); 

router.post('/login', usersController.login);

module.exports = router;