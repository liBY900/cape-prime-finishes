const express = require('express');

const router = express.Router();

const {
  createEnquiry,
  getAllEnquiries
} = require('../controllers/enquiryController');


// POST - Create a new enquiry
router.post('/', createEnquiry);


// GET - Get all enquiries
router.get('/', getAllEnquiries);


module.exports = router;