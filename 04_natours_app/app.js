const express = require('express');
const morgan = require('morgan');

const app = express();

// Middlewares
if (process.env.NODE_ENV === 'development') {
   app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// add ? to the parameter to make it optional so that it will not be required on the request url.
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
