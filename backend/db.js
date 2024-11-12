const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/NagpurDial1";
// const mongoURI = "mongodb+srv://devtanushri22:H8C2fWrtSkTfyg3l@nagpurdial.0con4.mongodb.net/";
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);

    console.log("mongo connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};
module.exports = connectToMongo;
