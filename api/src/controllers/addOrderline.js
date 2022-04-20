const { Router } = require("express");
const addOrderline = Router();
const { Product, Stock, Orderline, Sale, Client } = require("../db");
//como se importa del archivo db va en mayus

addOrderline.post("/", async (req, res, next) => {
  try {
    const { id, saleId, quantity, discount } = req.body;
    const getProductInfo = await Product.findOne({
      where: {
        id: id,
      },
    });
    console.log(req.body, "soy REQ.BODY");
    const getSaleId = await Sale.findOne({
      where: {
        id: saleId,
      },
    });
    console.log(getSaleId, "SOY getSaleId");
    const newOrderline = await Orderline.create({
      quantity,
      discount,
      price: getProductInfo?.dataValues.clientPrice,
      productId: getProductInfo?.dataValues.id,
      subTotal:
        (1 - discount / 100) *
        getProductInfo?.dataValues.clientPrice *
        quantity,
      saleId: getSaleId?.dataValues.id,
    });
    return res.status(200).json(newOrderline); //buscar con http status
  } catch (error) {
    next(error);
  }
});
module.exports = addOrderline;
