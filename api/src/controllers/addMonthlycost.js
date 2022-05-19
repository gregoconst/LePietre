const { Router } = require("express");
const addMonthlycost = Router();
const {
  Product,
  Stockdetail,
  Orderline,
  Sale,
  Client,
  Monthlycost,
} = require("../db");
//como se importa del archivo db va en mayus

addMonthlycost.post("/", async (req, res, next) => {
  try {
    const { sueldos, materiales, impuestos, extra, descripcion } = req.body;
    if (!sueldos && !materiales && !impuestos) {
      return res.status(404).json("Necessary parameters not found");
    }
    const newMonthlyCost = await Monthlycost.create({
      employee: sueldos,
      materials: materiales,
      taxes: impuestos,
      extra: extra,
      description: descripcion,
      total: sueldos + materiales + impuestos + extra,
    });
    return res.status(202).json(newMonthlyCost);
  } catch (error) {
    next(error);
  }
});
module.exports = addMonthlycost;
