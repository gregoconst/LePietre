const { Router } = require("express");
const addSale = Router();
const { Product, Stock, Orderline, Sale, Client } = require("../db");
//como se importa del archivo db va en mayus

addSale.post('/',async(req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
})