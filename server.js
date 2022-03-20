// Declare dependencies
const express = require('express');
const dotenv = require('dotenv');

// load environment variables with dotenv
dotenv.config({ path: './config/config.env' });

// Initialize express as app variable 
const app = express();

/* BEGIN ROUTES */
// Route to get all bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: "Show all" });
});

// Route to get specific bootcamp by id
app.get('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

// Route to create bootcamp
app.post('/api/v1/bootcamps', (req, res) => {
    res.status(200).json({ success: true, msg: "Create new" });
});

// Route to update bootcamp
app.put('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

// Route to delete bootcamp
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});
/* END ROUTES */

// Set port from environment variable
const PORT = process.env.PORT || 5050;

// Start server
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);