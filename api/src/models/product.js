const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "product",
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.TEXT,
      },
      precioCliente: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      precioLista: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      tipoDeProducto: {
        type: DataTypes.ENUM("pintureria", "revestimientos", "atermicos"),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
