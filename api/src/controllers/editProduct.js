const { Router } = require("express");
const editProduct = Router();
const { Product, Stock } = require("../db");

editProduct.put("/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const {
      name,
      image,
      clientPrice,
      cost,
      productType,
      description,
      stock,
      movimiento,
    } = req.body;
    const product = await Product.findOne({
      where: {
        id: productId,
      },
    });
    const clientSideStock = await Stock.findOne({
      where: {
        productId: productId,
      },
    });
    await Product.update(
      {
        name: name ? name : product.dataValues.name,
        image: image ? image : product.dataValues.image,
        description: description ? description : product.dataValues.description,
        clientPrice: clientPrice ? clientPrice : product.dataValues.clientPrice,
        cost: cost ? cost : product.dataValues.cost,
        productType: productType ? productType : product.dataValues.productType,
      },
      {
        where: {
          id: productId,
        },
      }
    );
    await Stock.update(
      {
        stock: stock ? stock : clientSideStock.dataValues.stock,
        movimiento: movimiento ? movimiento : clientSideStock.dataValues.movimiento,
      },
      {
        where: {
          productId: productId,
        },
      }
    );
    // const products = await Product.findAll();
    res.status(200).json("Producto editado correctamente");
  } catch (error) {
    next(error);
  }
});

module.exports = editProduct;
