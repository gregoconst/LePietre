const { Router } = require("express");
const router = Router();

const addProduct = require("../controllers/addProduct");
const getProduct = require("../controllers/getProduct");
const deleteProduct = require("../controllers/deleteProduct");
const editProduct = require("../controllers/editProduct");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/addproduct", addProduct);
router.use("/getproduct", getProduct);
router.use("/deleteproduct", deleteProduct);
router.use("/editproduct", editProduct);


module.exports = router;
