const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  createOneProduct,
  updateOneProduct,
  deleteOneProduct,
} = require("./controllers");
const upload = require("../../middlewares/multer");

const productsRouter = express.Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:id", getOneProduct);
productsRouter.post("/", upload.single("image"), createOneProduct);
productsRouter.post("/", updateOneProduct);
productsRouter.delete("/", deleteOneProduct);

module.exports = productsRouter;
