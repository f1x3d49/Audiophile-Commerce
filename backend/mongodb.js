const { mongoose } = require("mongoose");
require("dotenv").config;

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@products.dxk8sas.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to Database!🌍");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
