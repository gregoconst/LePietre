const { Router } = require("express");
const addClient = Router();
const { Client } = require("../db");

addClient.post("/", async (req, res, next) => {
  try {
    const {
      name,
      lastName,
      phone,
      adress,
      identificacionAfip,
      DniCuitCuil,
      mail,
      alta,
    } = req.body;
    if (!name || !lastName || !phone) {
      return res.status(404).json("Necessary parameters not found");
    }
    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);
    const lastNameUpper = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    const newClient = await Client.create({
      name: nameUpper,
      lastName: lastNameUpper,
      phone,
      adress,
      identificacionAfip,
      DniCuitCuil,
      mail,
      alta,
    });
    return res.status(201).json(newClient);
  } catch (error) {
    next(error);
  }
});

module.exports = addClient;
