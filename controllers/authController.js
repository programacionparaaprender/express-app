const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const secretKey = 'tu_clave_secreta'; // Debe ser segura y almacenada de manera segura

const generateToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
};

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.sendStatus(403);

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const usuario = await User.create({ name, email, password: hashedPassword });
        const token = generateToken(usuario);
        res.status(201).json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await User.findOne({ where: { email } });

        if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
            return res.status(401).json({ error: 'Credenciales incorrectas' });
        }

        const token = generateToken(usuario);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    authenticateToken,
    registerUser,
    loginUser,
};
