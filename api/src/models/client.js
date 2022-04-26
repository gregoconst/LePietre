const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "client",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING,
      },
      identificacionAfip: {
        type: DataTypes.ENUM(
          "responsable inscripto",
          "consumidor final",
          "excento"
        ),
      },
      DniCuitCuil: {
        type: DataTypes.STRING,
        unique: true,
      },
      mail: {
        type: DataTypes.STRING,
      },
      alta: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    { timestamps: false }
  );
};
