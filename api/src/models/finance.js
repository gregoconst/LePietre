const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "finance",
    {
      ingresos: {
        type: DataTypes.FLOAT,
      },
      gastos: {
        type: DataTypes.FLOAT,
      },
      monto: {
        type: DataTypes.FLOAT
      },
      comprobante: {
        type: DataTypes.STRING
      }
    },
    { timestamps: false }
  );
};
