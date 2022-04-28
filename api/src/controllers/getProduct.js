const { Router } = require("express");
const getProduct = Router();
const { Product, Stockdetail } = require("../db");

getProduct.get("/", async (req, res, next) => {
  try {
    const product = await Product.findAll({
        include:[{model: Stockdetail}]
    });
    console.log(product, "aaaaaaaaaaaaaaaaaa");
    return res.status(200).send(product);
  } catch (error) {
    next(error);
  }
});

module.exports = getProduct;
