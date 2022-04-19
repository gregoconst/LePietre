const { Router } = require("express");
const addOrderline = Router();
const { Product, Stock, Orderline, Sale, Client } = require("../db");
//como se importa del archivo db va en mayus

addOrderline.get('/',async(req, res, next) => {
    try {
        const {
            id
        } = req.body
        const productId = await Product.findOne({
            where: {
                id: id
            }
        })
        console.log(productId);
        return res.status(200).json(productId)//buscar con http status
    } catch (error) {
        next(error);
    }
})
module.exports = addOrderline;