const { Router } = require("express");
const getProduct = Router();
const { Product } = require("../db");

getProduct.get("/", async (req, res, next) => {
  try {
    const product = await Product.findAll();
    return res.status(200).send(product);
  } catch (error) {
    next(error);
  }
});

module.exports = getProduct;
