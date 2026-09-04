const express = require('express');
const cors = require('cors');
require('dotenv').config();

const enquiryRoutes = require('./routes/enquiryRoutes');

// Create Express application
const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Test route
app.get('/', (req, res) => {

  res.json({
    message: 'Cape Prime Finishes API is running'
  });

});


// Enquiry routes
app.use('/api/enquiries', enquiryRoutes);


// Server port
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(`🚀 Cape Prime Finishes server running on port ${PORT}`);

});