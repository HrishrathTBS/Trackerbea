const mongoose = require('mongoose');
const User = require('../models/User');
const {successResponse, errorResponse} = require('../utils/responseBuilder'); 
const userServices = require('../services/userServices');
const UTILS = require('../utils/responseBuilder');


exports.signup = async(req,res) => {
    const {email, firstname, lastname, password  } = req.body;
    try{
        const user = await userServices.getUserEmail(email);
        if(user){
            return  res.send(successResponse({code: 400, message : 'Email Already Exist'}));
        }
        else{
            const hashedPassword = await userServices.generatePassword(password);
            const newUser = new User({
				_id : new mongoose.Types.ObjectId(),
				email : email,
				firstname: firstname,
                lastname : lastname,
				password : hashedPassword
			});
           const created_user = await userServices.createNewUser(newUser);
            if(created_user){
                const generatedJwt = userServices.generateJwtTokenAndExpiresIn(created_user);
            
                return res.send(successResponse({code: 200, data : {
                    token : generatedJwt.token,
                    tokenExpiresIn : generatedJwt.expiresIn
                    
                }, message : 'User Register Successfull.'}));
            }else{
                return res.send(errorResponse({code: 401, message : 'Failed'}));
            }
        }
    }catch(error){
        return res.send(errorResponse({code : 500, message : 'failed'}));
    }
}

exports.login = async (req, res) => {
    try {
		const { email, password } = req.body;
		const user = await userServices.getUserEmail(email);
		if(user) {
			const result = await userServices.comparePassword(password, user.password);
			if(result) {
                const generatedJwt = userServices.generateJwtTokenAndExpiresIn(user);
				return res.send(successResponse({code: 200, data : {
						token: generatedJwt.token,
						tokenExpiresIn: generatedJwt.expiresIn,
                        userId : user._id
                },
                message : 'Login Successful',
            }));
            } else {
                return res.send(successResponse({code: 401, message : 'Invalid credentials'}));
            }
        }else{
            return res.send(successResponse({code: 401, message : 'Invalid credentials'}));
        }
    }catch(error) {
        console.log(error);
        return res.send(errorResponse({code : 500, message : 'failed'}));
    }
}