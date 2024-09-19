const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configurar conexión a la base de datos
const sequelize = new Sequelize('prueba', 'root', '', {
    host: 'localhost',
    dialect: 'mysql', // Cambia esto según tu base de datos
});

// Definir modelo de Usuario
const Usuario = sequelize.define('Usuario', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

// Sincronizar modelos con la base de datos
sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.error('Error al sincronizar la base de datos:', err));

// Middleware para manejar JSON
app.use(express.json());

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Configurar Socket.IO
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');

    // Escuchar mensajes desde el cliente
    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);
        io.emit('mensaje', `Servidor dice: ${data}`); // Emitir a todos los clientes
    });

    // Manejar desconexión
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

// Rutas de la API
app.get('/api/usuarios', async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
});

// Servidor escuchando en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
