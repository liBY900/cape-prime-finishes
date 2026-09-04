const enquiryModel = require('../models/enquiryModel');


// CREATE ENQUIRY
const createEnquiry = (req, res) => {

  const {
    fullName,
    phone,
    email,
    service,
    projectDetails
  } = req.body;


  // Check required fields
  if (!fullName || !phone || !service) {

    return res.status(400).json({
      success: false,
      message: 'Full name, phone and service are required.'
    });

  }


  enquiryModel.createEnquiry(
    fullName,
    phone,
    email,
    service,
    projectDetails,
    (err, result) => {

      if (err) {

        console.error('Database error:', err);

        return res.status(500).json({
          success: false,
          message: 'Failed to save enquiry.'
        });

      }


      res.status(201).json({
        success: true,
        message: 'Enquiry submitted successfully.',
        enquiryId: result.insertId
      });

    }
  );
};


// GET ALL ENQUIRIES
const getAllEnquiries = (req, res) => {

  enquiryModel.getAllEnquiries((err, results) => {

    if (err) {

      console.error('Database error:', err);

      return res.status(500).json({
        success: false,
        message: 'Failed to retrieve enquiries.'
      });

    }


    res.status(200).json({
      success: true,
      enquiries: results
    });

  });

};


module.exports = {
  createEnquiry,
  getAllEnquiries
};