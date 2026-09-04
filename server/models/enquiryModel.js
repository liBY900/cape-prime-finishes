const db = require('../config/db');

const createEnquiry = (
  fullName,
  phone,
  email,
  service,
  projectDetails,
  callback
) => {

  const sql = `
    INSERT INTO enquiries
    (full_name, phone, email, service, project_details)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      fullName,
      phone,
      email,
      service,
      projectDetails
    ],
    callback
  );
};


const getAllEnquiries = (callback) => {

  const sql = `
    SELECT *
    FROM enquiries
    ORDER BY created_at DESC
  `;

  db.query(sql, callback);
};


module.exports = {
  createEnquiry,
  getAllEnquiries
};