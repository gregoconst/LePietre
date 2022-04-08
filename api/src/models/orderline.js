const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "orderline",
    {
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      discount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
