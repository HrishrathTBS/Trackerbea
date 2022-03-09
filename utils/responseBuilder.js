exports.successResponse = ({code = 200, data, message = ""})=>{
	const response = {
		code : code,
		status : true,
		data : data,
		message : message
	}
	return response;
}

exports.errorResponse = ({code = 400, message = ""})=>{
	const response = {
		code : code,
		status : false,
		message : message
	}
	return response;
}
