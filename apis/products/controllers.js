const Products = require("../../data");
const Product = require("../../models/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    return res.jdon(products);
  } catch (error) {
    return res.json(error);
  }
};

const getOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res
        .status(400)
        .json({ msg: "product with this id is not found!" });
    }
  } catch (error) {
    return res.status(error.status || 500).json(error);
  }
};

const createOneProduct = async (req, res) => {
  try {
    const product = await product.create(req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "create product failed!" });
    }
  } catch (error) {
    return res.status(error.status).json(error);
  }
};

const updateOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await product.findByIdAndUpdate(id, req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "update product failed!" });
    }
  } catch (error) {
    return res.status(error.status).json(error);
  }
};

const deleteOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await product.findByIdAndDelete(id, req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "update product failed!" });
    }
  } catch (error) {
    return res.status(error.status).json(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
