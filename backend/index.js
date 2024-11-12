const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const Locations = require("./models/Locations");
const FileUploadRoute = require('./routes/fileUpload');

var jwt = require("jsonwebtoken");
require('dotenv').config();
const fs = require("fs");

const app = express();

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, "freelisting");
if (!fs.existsSync(uploadDir)) { 
  fs.mkdirSync(uploadDir);
}

// Middleware
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../build")));

// MongoDB Connection with error handling
const mongoURI ="mongodb://nagpurdial_nagpurdialpsk:2HUqJfIWlZ@157.173.119.93:27017/nagpurdial_NagpurDial1?authSource=admin";

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB Test Database");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/auth/advertise", require("./routes/auth"));
app.use("/api/auth/businesschat", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use('/api/fileUpload', require("./routes/fileUpload"));

// Routes for search by locations
app.post("/api/search", async (req, res) => {
  const { locationsName } = req.body;
  if (!locationsName || typeof locationsName !== "string" || locationsName.trim() === "") {
    return res.status(400).json({ message: "Invalid input" });
  }

  try {
    const locations = await Locations.find({
      name: { $regex: locationsName, $options: "i" }, // Case-insensitive search by name
    });
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Routes for search by business name and address as well
app.post("/api/location", async (req, res) => {
  const { locationsName } = req.body;
  if (!locationsName || typeof locationsName !== "string" || locationsName.trim() === "") {
    return res.status(400).json({ message: "Invalid input" });
  }
  try {
    const locations = await Locations.find({
      $or: [
        { description: { $regex: locationsName, $options: "i" } },
        { name: { $regex: locationsName, $options: "i" } },
      ],
    });
    res.json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// Error handling middleware
// Handle React routing
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

const PORT = process.env.PORT || 30001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Test server running on port ${PORT}`);
});
