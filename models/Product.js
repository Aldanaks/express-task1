const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, default: 100 },
  image: String,
});

module.exports = mongoose.model("product", productSchema);
