const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    email : {
        type : String,
        unique: true,
		index: true,
		match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    firstname : {
        type : String,
        require : true,
        unique : true,
        index : true
    },
    lastname : {
        type : String,
        require : true,
        unique : true,
        index : true
    },
    password: { 
        type: String, 
        required: true 
    },
    },
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);

User.createIndexes();

module.exports = User;

    