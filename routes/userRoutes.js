// routes/userRoutes.js
const express = require('express');
const { createUser, updateUser, getUser, getAllUsers, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.get('/users/:id', getUser);
router.delete('/users/:id', deleteUser);
router.get('/users', getAllUsers);

module.exports = router;
