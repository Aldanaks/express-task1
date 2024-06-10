//new version:  import express from 'express'
// old version:
const express = require("express");
const products = require("./data");

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  return res.json(products);
});

app.post("/products", (req, res) => {
  console.log(req, body);
  products.push({ id: 100, name: "dana", price: "10000" });

  return res.json(products);
});

app.listen(8000, () => {
  console.log("i am running on port 8000");
});
