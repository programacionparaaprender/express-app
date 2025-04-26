// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE, // Asegúrate de usar DATE o DATETIME
      allowNull: false,
      defaultValue: DataTypes.NOW, // Fecha actual por defecto
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'Users',
    timestamps: true
});

module.exports = User;
