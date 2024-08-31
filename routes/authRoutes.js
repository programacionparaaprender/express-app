// routes/userRoutes.js
const express = require('express');
const { registerUser, loginUser, authenticateToken } = require('../controllers/authController');
const router = express.Router();
const User = require('../models/User');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/perfil', authenticateToken, async (req, res) => {
    const usuario = await User.findByPk(req.user.id);
    res.json(usuario);
});

module.exports = router;
