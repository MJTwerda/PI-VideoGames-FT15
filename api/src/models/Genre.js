const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Genre', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            DefaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,

        }
    })
}