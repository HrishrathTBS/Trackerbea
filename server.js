const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const {successResponse, errorResponse} = require('./utils/responseBuilder')
const rootRoutes = require('./routes/api/crud');
const User = require('./models/User');
const userRoutes = require('./routes/user');
const logger = require('morgan');

const app = express();

// exclusing dotenv config from production
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// CORS Middleware
app.use(cors());
app.use(logger('dev'));

// express middleware handling the body parsing 
app.use(express.json());

// express middleware handling the form parsing
app.use(express.urlencoded({extended: false}));

// middleware for handling sample api routes
app.use('/api/v1', require('./routes/api/crud'));

// create static assets from react code for production only
if (process.env.NODE_ENV === 'production') {
    app.use(express.static( 'client/build' ));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

// use port from environment variables for production
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})

mongoose
	.connect(process.env.MONGODB_URI, { useNewUrlParser: true ,  useUnifiedTopology: true })
	.then(() => console.log(`Connected to database ${process.env.MONGODB_URI}`))
	.catch(err => console.log(`Database error: ${err}`));

// DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
mongoose.set('useCreateIndex', true);
// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return  res.send(successResponse({code : 200}));
	}
	next();
});

// routes
app.use('/', rootRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
	const error = new Error('Route not found');
	error.status = 404;
	next(error);
});

app.use((error, req, res) => {
	return res.send(errorResponse({code : error.status || 500, message : 'failed'}));
});

module.exports = app;
