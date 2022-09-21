const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "product",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
      },
      clientPrice: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      productType: {
        type: DataTypes.ENUM("pintureria", "revestimientos", "atermicos"),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      stockNumber: {
        type: DataTypes.INTEGER,
      }
    },
    { timestamps: false }
  );
};
