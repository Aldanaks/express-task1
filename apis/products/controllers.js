const Product = require("../../models/product");

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    if (product) {
      return res.status(200).json(product);
    } else {
      return res
        .status(400)
        .json({ msg: "product with this id is not found!" });
    }
  } catch (error) {
    return next(error);
  }
};

const createOneProduct = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.image = req.file.path;
    }
    const product = await Product.create(req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "create product failed!" });
    }
  } catch (error) {
    return next(error);
  }
};

const updateOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await product.findByIdAndUpdate(id, req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "update product failed!" });
    }
  } catch (error) {
    return next(error);
  }
};

const deleteOneProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await product.findByIdAndDelete(id, req.body);
    if (product) {
      return res.status(201).json(product);
    } else {
      return res.status(404).json({ msg: "update product failed!" });
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
