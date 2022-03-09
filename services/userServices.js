const User = require('../models/User');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const tokenExpiresIn = 86400; // 1 day

dotenv.config();

//Get User Email 
exports.getUserEmail = async (email) => {
    return new Promise(function(resolve, reject) {
		User.findOne({'email': email}, (err, user) => {
			if(err) {
				reject(err);
			}
			resolve(user);
		});
	});
}

//Genrate Password
exports.generatePassword = async (password) => {
    return new Promise(function(resolve, reject) {
		bcrypt.hash(password, 10, (err, hashedPassword) => {
			if(err) {
				reject(err);
			}
			resolve(hashedPassword);
		});
	});

}

// Create a new User on Signup
exports.createNewUser = function(newUser) {
	return new Promise(function(resolve, reject) {
		newUser.save((err, user) => {
			if(err) {
				reject(err);
			}
			resolve(user);
		});
	});
};

// Generate JWT Token with User Details
exports.generateJwtTokenAndExpiresIn = function(user) {
	return { token: jwt.sign(
		{
			email: user.email,
			userId: user._id
		},
		process.env.JWT_SECRET,
		{
			expiresIn: tokenExpiresIn
		}
	), expiresIn: tokenExpiresIn };
};

exports.comparePassword = (password, user_password) => {
	return new Promise(function(resolve, reject) {
		bcrypt.compare(password, user_password, (err, result) => {
			if(err) {
				reject(err);
			}
			resolve(result);
		});
	});
};