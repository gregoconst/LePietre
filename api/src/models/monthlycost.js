const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "monthlycost",
    {
      employee: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      materials: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      taxes: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      extra: {
        type: DataTypes.FLOAT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      date: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  );
};
