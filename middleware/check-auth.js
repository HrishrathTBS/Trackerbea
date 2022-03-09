const jwt = require('jsonwebtoken');
const {successResponse, errorResponse} = require('../utils/responseBuilder');
const userServices = require('../services/userServices')

module.exports = async(req, res, next) => {
    try {
        const token = req.headers.authorization;
		const decoded = jwt.verify(token, config.secret);
		req.user = decoded;
		
		const user_details = await userServices.getUserById(req.user.userId);
		next();

    }catch (error){
        return res.send(successResponse({code : 401, message : 'Auth Failed'}));
    }
}