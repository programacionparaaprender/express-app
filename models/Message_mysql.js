// models/Message.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

/*
_id: previousMessages.length,
        text: message.text,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Prueba',
        }
*/

const Message = sequelize.define('Message', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
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
    tableName: 'Messages',
    timestamps: true
});

module.exports = Message;
