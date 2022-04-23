const { Router } = require("express");
const saleStatus = Router();
const { Product, Stock, Orderline, Sale, Client } = require("../db");
//como se importa del archivo db va en mayus

saleStatus.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await Sale.update(
        {
          sold: true,
        },
        {
          where: {
            id: id,
          },
        }
      );
  } catch (error) {
    next(error);
  }
});
module.exports = saleStatus;