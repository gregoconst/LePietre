const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    imagen: {
        type: DataTypes.TEXT,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    tipoDeProducto: {
        type: DataTypes.ENUM('consumible', 'almacenable'),
        allowNull: false,
    }
  });
};