const { Router } = require("express");
const deleteProduct = Router();
const { Product, Stock } = require("../db");

deleteProduct.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).send("Necessary parameters not found");
    }
    await Stock.destroy({
      where: {
        productId: id,
      },
    });
    await Product.destroy({
      where: {
        id: id,
      },
    });
    res.status(202).send("Eliminado correctamente");
  } catch (error) {
    next(error);
  }
});

module.exports = deleteProduct;
