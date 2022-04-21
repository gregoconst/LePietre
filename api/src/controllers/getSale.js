const { Router } = require("express");
const getSale = Router();
const { Product, Orderline, Sale } = require("../db");

getSale.get("/", async (req, res, next) => {
  try {
    const sale = await Sale.findAll({
        include:[{model: Orderline}]
    });
    // console.log(product, "aaaaaaaaaaaaaaaaaa");
    return res.status(200).send(sale);
  } catch (error) {
    next(error);
  }
});

module.exports = getSale;