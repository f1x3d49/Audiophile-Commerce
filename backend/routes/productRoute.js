const express = require("express");
const Product = require("../models/productModel");
const router = express.Router();
const { getProducts, getProduct } = require("../controllers/productController");

router.get("/", getProducts);
router.get("/:id", getProduct);

module.exports = router;
