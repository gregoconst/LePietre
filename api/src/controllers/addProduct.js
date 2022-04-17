const { Router } = require("express");
const addProduct = Router();
const { Product, Stock } = require("../db");

addProduct.post("/", async (req, res, next) => {
  try {
    const {
      name,
      image,
      clientPrice,
      cost,
      productType,
      description,
      movimiento,
      stock,
    } = req.body;
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
    await Stock.findOrCreate({
      where: {
        productId: newProduct?.dataValues.id,
      },
      defaults: {
        stock: stock,
        movimiento: movimiento,
      },
    });
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

module.exports = addProduct;
