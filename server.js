// Declare dependencies
const express = require('express');
const dotenv = require('dotenv');

// load environment variables with dotenv
dotenv.config({ path: './config/config.env' });

// Initialize express as app variable 
const app = express();

// Set port from environment variable
const PORT = process.env.PORT || 5000;
// Start server
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);

