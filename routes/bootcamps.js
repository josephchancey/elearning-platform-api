const express = require('express');
const router = express.Router();



// Route to get all bootcamps
router.get('/', (req, res) => {
    res.status(200).json({ success: true, msg: "Show all" });
});

// Route to get specific bootcamp by id
router.get('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
});

// Route to create bootcamp
router.post('/', (req, res) => {
    res.status(200).json({ success: true, msg: "Create new" });
});

// Route to update bootcamp
router.put('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Update bootcamp ${req.params.id}` });
});

// Route to delete bootcamp
router.delete('/:id', (req, res) => {
    res.status(200).json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
});

// Export these routes
module.exports = router;