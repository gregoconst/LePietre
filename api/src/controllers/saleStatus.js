const { Router } = require("express");
const saleStatus = Router();
const { Product, Stockdetail, Orderline, Sale, Client } = require("../db");
//como se importa del archivo db va en mayus

saleStatus.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const getSale = await Sale.findOne({
      where: {
        id: id,
      },
      include: [{ model: Orderline }],
    });
    let allProductsId = getSale.dataValues.orderlines.map(
      (orderline) => orderline.dataValues.productId
    );
    console.log(allProductsId, "aaaaaaaaAAA");
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
    // const stock = await Stock.findOne({
    //   where: {
    //     productId: 1
    //   }
    // })
    // console.log(stock,"aaaaaaa");
    allProductsId.forEach(async (e) => {
      const stock = await Stockdetail.findOne({
        where: {
          productId: e,
        },
      });

      const saleOrderline = await Orderline.findOne({
        where: {
          productId: e,
          saleId: id,
        },
      });

      await Stockdetail.create({
        productId: e,
        totalStock:
          stock.dataValues.totalStock - saleOrderline.dataValues.quantity,
        movement: "Venta efectiva",
        stockMovement: saleOrderline.dataValues.quantity,
      });
    });
    // const getStock =
    // await Stock.create({
    //   productId: getSale?.dataValues.orderlines.productId,
    //   stock:
    //     getSale?.dataValues.stock - getSale?.dataValues.orderlines.quantity,
    //   movimiento: "Venta",
    // });
    return res.status(200).json("vendido");
  } catch (error) {
    next(error);
  }
});
module.exports = saleStatus;
