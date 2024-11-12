const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const FileUpload = require("../modules/FileUpload"); // Import the FileUpload model

const router = express.Router();

// Ensure the upload directory exists
const uploadDir = path.join(__dirname, "../uploads/freelisting");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // Limit file size to 10MB
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.'));
    }
  },
});

// File upload route
router.post("/freelisting", upload.array("files"), async (req, res) => {
  try {
    // Validate required fields
    if (!req.body.businessname || !req.body.firstname || !req.body.lastname || !req.body.email || !req.body.number || !req.body.location || !req.body.pincode) {
      return res.status(400).send("Missing required fields");
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).send("Please upload one or more files");
    }

    // Map files to a more consistent structure
    const filesArray = req.files.map((file) => ({
      filename: file.filename,
      path: file.path,
      contentType: file.mimetype,
    }));

    // Create a new file upload document
    const newUpload = new FileUpload({
      files: filesArray,
      businessname: req.body.businessname,
      description: req.body.description,
      firstname: req.body.firstname,
      middlename: req.body.middlename,
      lastname: req.body.lastname,
      email: req.body.email,
      number: req.body.number,
      location: req.body.location,
      pincode: req.body.pincode,
    });

    // Save the document to the database
    await newUpload.save();
    res.status(200).send("Files uploaded successfully");

  } catch (error) {
    console.error("Error uploading files:", error);

    if (error instanceof multer.MulterError) {
      res.status(400).send(`Multer error: ${error.message}`);
    } else {
      res.status(500).send("Failed to upload files due to server error");
    }
  }
});

module.exports = router;
