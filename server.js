const express = require('express');
const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const transactionsRouter = require('./routes/transaction');
const connectDB = require('./config/db');

connectDB();

dotEnv.config({path: './config/config.env'});
const app = express();
app.use(bodyParser.json());
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}
app.use('/api/v1/transactions', transactionsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));