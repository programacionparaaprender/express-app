const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const app = express();
// Servir archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));
// Servidor escuchando en el puerto 5000
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
