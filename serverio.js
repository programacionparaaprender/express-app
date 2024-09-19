const express = require('express');
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

// Servidor escuchando en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
