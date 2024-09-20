const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
//const io = new Server(server);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:9000", // Cambia esto al origen correcto
        methods: ["GET", "POST"]
    }
});

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const sequelize = require('./config/db');
require('dotenv').config();
sequelize.sync().then(() => {
    console.log('Base de datos sincronizada');
}).catch(err => {
    console.error('Failed to sync database:', err);
});
app.use(cors());
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
app.use('/api', userRoutes);
app.use('/api', authRoutes);

// Servidor escuchando en el puerto 9000
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
