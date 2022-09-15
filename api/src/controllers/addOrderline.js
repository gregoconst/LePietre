const { Router } = require("express");
const addOrderline = Router();
const { Product, Stock, Orderline, Sale, Client } = require("../db");
//como se importa del archivo db va en mayus

addOrderline.post("/", async (req, res, next) => {
  try {
    const { productId, saleId, quantity, discount } = req.body;
    const getProductInfo = await Product.findOne({
      where: {
        id: productId,
      },
    });
    // console.log(req.body, "soy REQ.BODY");
    const getSaleId = await Sale.findOne({
      where: {
        id: saleId,
      },
    });
    // console.log(getSaleId, "SOY getSaleId");
    const getStock = await Stock.findOne({
      where: {
        productId: productId,
      },
    });
    //  console.log(getStock, "soy getStock");
    if (quantity > getStock?.dataValues.stock) {
      if (getStock?.dataValues.stock === 0){
        return res.status(418).json("No hay stock disponible")
      }
      return res.status(418).json("No podes añadir una cantidad mayor a la disponible")
    } else if (quantity > 0){
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
    }
    return res.status(418).json("Ingrese un monto mayor a 0 porfa")
  } catch (error) {
    next(error);
  }
});

// hola

module.exports = addOrderline;
