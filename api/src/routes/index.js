const { Router } = require("express");
const router = Router();

const addProduct = require("../controllers/addProduct");
const getProduct = require("../controllers/getProduct");
const deleteProduct = require("../controllers/deleteProduct");
const editProduct = require("../controllers/editProduct");
const addOrderline = require("../controllers/addOrderline");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/addproduct", addProduct);
router.use("/getproduct", getProduct);
router.use("/deleteproduct", deleteProduct);
router.use("/editproduct", editProduct);
router.use('/addorderline', addOrderline);


module.exports = router;
