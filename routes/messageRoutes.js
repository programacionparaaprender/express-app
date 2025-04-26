// routes/messageRoutes.js
const express = require('express');
const { messages, saveMessage } = require('../controllers/messageController');
const router = express.Router();

router.get('/messages', messages);
router.post('/messages/save', saveMessage);

module.exports = router;
