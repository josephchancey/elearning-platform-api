// Declare dependencies
const express = require('express');
const dotenv = require('dotenv');

// Route files
const bootcamps = require('./routes/bootcamps');

// load environment variables with dotenv
dotenv.config({ path: './config/config.env' });

// Initialize express as app variable 
const app = express();

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// Set port from environment variable
const PORT = process.env.PORT || 5050;

// Start server
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);