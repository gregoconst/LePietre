const { Router } = require("express");
const addProduct = Router();
const { Product } = require("../db");

addProduct.post("/", async (req, res, next) => {
  try {
    const { name, image, clientPrice, cost, productType, description } =
      req.body;
    if (!name || !description || !clientPrice || !cost || !productType) {
      return res.status(404).json("Necessary parameters not found");
    }
    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    const newProduct = await Product.create({
      name: nameUpper,
      image,
      clientPrice,
      cost,
      productType,
      description,
    });
    return res.status(201).json(newProduct)
  } catch (error) {
    next(error);
  }
});

module.exports = addProduct;
