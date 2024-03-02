const { mongoose } = require("mongoose");
require("dotenv").config;

const Product = require("./models/productModel");

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@products.dxk8sas.mongodb.net/Audiophile?retryWrites=true&w=majority`;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Connected to Database!🌍");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
