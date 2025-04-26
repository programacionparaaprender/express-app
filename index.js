const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const { Sequelize, DataTypes } = require('sequelize');
const path = require('path');
const cors = require('cors');
const app = express();
const messageController = require('./controllers/messageController');
const server = http.createServer(app);
//const io = new Server(server);
const io = new Server(server, {
    cors: {
        //origin: "http://localhost:9000", // Cambia esto al origen correcto
        origin: '*', // Cambia esto según tu necesidad de seguridad
        methods: ["GET", "POST"]
    }
});

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const messageRouter = require('./routes/messageRoutes');
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

    socket.on('message', async (data) => {
        try {
          const message = await messageController.saveMessage(data);
          console.log('Mensaje recibido:', message);
            io.emit('message', message); // Emitir el mensaje a todos los clientes
        } catch (error) {
          console.error('Error al emitir el mensaje:', error);
        }
      });

    // Manejar desconexión
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

// Rutas de la API
app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', messageRouter);
// Servidor escuchando en el puerto 9000
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
