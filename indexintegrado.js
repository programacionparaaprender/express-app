const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
//const io = new Server(server);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000", // Cambia esto al origen correcto
        methods: ["GET", "POST"]
    }
});

require('dotenv').config();
//app.use(cors());
app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    
}).catch(err => {
    console.error('Failed to sync database:', err);
});

// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Configurar Socket.IO
io.on('connection', (socket) => {
    console.log('Un usuario se ha conectado');

    // Escuchar mensajes del cliente
    socket.on('mensaje', (data) => {
        console.log('Mensaje recibido:', data);
        io.emit('mensaje', `Servidor dice: ${data}`);  // Emitir mensaje a todos los clientes
    });

    // Manejar la desconexión
    socket.on('disconnect', () => {
        console.log('Un usuario se ha desconectado');
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
