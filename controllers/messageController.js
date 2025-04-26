// controllers/messageController.js
const Message = require('../models/Message');
const express = require('express');

async function messages(req, res) {
    try {
      const messages = await Message.findAll();
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).send('Error al obtener mensajes');
    }
};

async function saveMessage(data) {
    const { username, content, userId } = data;
    let message = {};
    try {
        const json = { 
            username: username, 
            name: username, 
            content: content,
            userId: userId,
            createdAt: new Date(), 
        };
      message = await Message.create(json);
    } catch (error) {
      console.error('Error al guardar el mensaje:', error);
    }
    return message;
}

module.exports = {
    messages,
    saveMessage
};


