const {DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('VideoGame', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      //autoIncrement: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING
    },
    plataform: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: false
  }
  )};
