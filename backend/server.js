const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

//Database Connection
const connectDB = require("./mongodb");

// Routes
const homeRouter = require("./routes/home");
const productRoute = require("./routes/productRoute");

// Models
const Product = require("./models/productModel");

const app = express();

// DB connection
connectDB();

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Routes
app.use("/", homeRouter);

app.use("/api/products", productRoute);

app.listen(process.env.PORT, () =>
  console.log("Listening on port " + process.env.PORT)
);
