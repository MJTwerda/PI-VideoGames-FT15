const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('Genre', {
        id: {
            //type: DataTypes.INTEGER,
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
        }
    }, /* {
        timestamps: false
    } */
    )}