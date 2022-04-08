const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "client",
    {
      nombre: {
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
