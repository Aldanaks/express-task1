const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  createOneProduct,
} = require("./controllers");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:id", getOneProduct);
productsRouter.post("/", createOneProduct);





module.exports = productsRouter;
