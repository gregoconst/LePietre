const { Router } = require("express");
const editProduct = Router();
const { Product, Stockdetail } = require("../db");

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
    if (stock) {
      const lastStockBeforeUpdate = await Stockdetail.findOne({
        where: {
          productId: productId,
        },
        order: [["id", "DESC"]],
      });
      console.log('====================================');
      console.log(lastStockBeforeUpdate);
      console.log('====================================');
      if ((parseFloat(lastStockBeforeUpdate?.dataValues.totalStock) - parseFloat(stock)) >= 0){
        return res.status(418).json("No podes dejar el stock en negativo")
      }
      if (Math.sign(stock) === "-1") {
        await Stockdetail.create({
          stockMovement: stock,
          movement: movimiento,
          totalStock:
            parseFloat(lastStockBeforeUpdate?.dataValues.totalStock) - parseFloat(stock), //ESTAS INTENTANDO QUEDARTE CON EL ULTIMO STOCK Y NO DEJARLO EN NEGATIVO IMBECIL
          productId: productId,
        });
      } else {
        await Stockdetail.create({
          stockMovement: stock,
          movement: movimiento,
          totalStock:
            parseFloat(lastStockBeforeUpdate?.dataValues.totalStock) + parseFloat(stock),
          productId: productId,
        });

      }
      const lastStockAfterUpdate = await Stockdetail.findOne({
        where: {
          productId: productId,
        },
        order: [["id", "DESC"]],
      });
      console.log('====================================');
      console.log(lastStockAfterUpdate);
      console.log('====================================');
      await Product.update(
        {
          stockNumber: lastStockAfterUpdate?.dataValues.totalStock,
        },
        {
          where: {
            id: productId,
          },
        }
      );
    }
    // const products = await Product.findAll();
    res.status(200).json("Producto editado correctamente");
  } catch (error) {
    next(error);
  }
});

module.exports = editProduct;
