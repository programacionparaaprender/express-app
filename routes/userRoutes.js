// routes/userRoutes.js
const express = require('express');
const { createUser, updateUser, getUser, getAllUsers, deleteUser } = require('../controllers/userController');
const { authenticateToken } = require('../controllers/authController');
const router = express.Router();

router.post('/users', authenticateToken, createUser);
router.put('/users/:id', authenticateToken, updateUser);
router.get('/users/:id', authenticateToken, getUser);
router.delete('/users/:id', authenticateToken, deleteUser);
router.get('/users', authenticateToken, getAllUsers);

module.exports = router;
