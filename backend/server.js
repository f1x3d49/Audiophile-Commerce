const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

//Database Connection
const connectDB = require("./mongodb");

// Routes
const homeRouter = require("./routes/home");

// Models
const Product = require("./models/productModel");

const app = express();

connectDB();

app.set("view engine", "ejs");
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/", homeRouter);

app.get("/products", async (req, res) => {
  try {
    const products = await Product.findOne();
    console.log(products);
    res.send(products);
  } catch (error) {
    console.error("Error fecthing products: ", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(process.env.PORT, () =>
  console.log("Listening on port " + process.env.PORT)
);
