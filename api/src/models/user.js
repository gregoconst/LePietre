const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    empleado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    jefe: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
  });
};