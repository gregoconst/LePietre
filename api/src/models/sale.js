const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "sale",
    {
      sold: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    },
    { timestamps: false }
  );
};