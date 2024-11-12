const mongoose = require('mongoose');

const fileUploadSchema = new mongoose.Schema({
  files: [
    {
      filename: { type: String, required: true },
      path: { type: String, required: true },
      contentType: { type: String, required: true },
    },
  ],
  businessname: { type: String, required: true },
  description: { type: String, required: true },
  firstname: { type: String, required: true },
  middlename: { type: String },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  number: { type: String, required: true },
  location: { type: String, required: true },
  pincode: { type: String, required: true },
}, {
  timestamps: true,
});

const FileUpload = mongoose.model('FileUpload', fileUploadSchema);

module.exports = FileUpload;
