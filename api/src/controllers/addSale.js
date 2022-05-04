const { Router } = require("express");
const addSale = Router();
const { Product, Stock, Orderline, Sale, Client } = require("../db");
//como se importa del archivo db va en mayus

addSale.post("/", async (req, res, next) => {
  try {
    const { ClientId } = req.body;
    const getClientInfo = await Client.findOne({
      where: {
        id: ClientId,
      },
    });
    const newSale = await Sale.create({
      clientId: getClientInfo?.dataValues.id,
    });
    return res.status(202).json(newSale)
  } catch (error) {
    next(error);
  }
});

module.exports = addSale;
