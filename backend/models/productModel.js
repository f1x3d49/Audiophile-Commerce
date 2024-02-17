const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// sub-schema for the included items
const includedItem = new Schema({
  quantity: {
    type: Number,
    required: true,
  },
  item: {
    type: String,
    required: true,
  },
});

// sub-schema for the other items
const otherItem = new Schema({
  slug: String,
  name: String,
  image: Object,
});

const ProductSchema = new Schema({
  slug: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  categoryImage: {
    type: Object,
    required: true,
  },
  new: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  includes: [includedItem],
  gallery: {
    type: Schema.Types.Mixed,
    required: true,
  },
  others: [otherItem],
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
