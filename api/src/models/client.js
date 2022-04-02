const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('client', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      telefono: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      direccion: {
          type: DataTypes.STRING,
      },
      identificacionAfip: {
          type: DataTypes.ENUM('responsableInscripto', 'consumidorFinal', 'excento'),
          allowNull: false,
      },
      DniCuitCuil: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
      },
      mail: {
          type: DataTypes.STRING,
      },
      alta: {
          type: DataTypes.DATEONLY,
          allowNull: false,
          defaultValue: DataTypes.NOW
      }
    });
};