// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_SERVER,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false // Desactiva el logging de Sequelize para no mostrar queries en la consola
});

sequelize.authenticate()
    .then(() => console.log('Connected to Mysql Server'))
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
