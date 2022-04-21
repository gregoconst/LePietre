const { Router } = require("express");
const router = Router();

const addProduct = require("../controllers/addProduct");
const getProduct = require("../controllers/getProduct");
const deleteProduct = require("../controllers/deleteProduct");
const editProduct = require("../controllers/editProduct");
const addOrderline = require("../controllers/addOrderline");
const addClient = require("../controllers/addClient");
const addSale = require("../controllers/addSale");
const getSale = require("../controllers/getSale");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/addproduct", addProduct);
router.use("/getproduct", getProduct);
router.use("/deleteproduct", deleteProduct);
router.use("/editproduct", editProduct);
router.use("/addorderline", addOrderline);
router.use("/addclient", addClient);
router.use("/addsale", addSale);
router.use("/getsale", getSale);

module.exports = router;
