// controllers/userController.js
const User = require('../models/User');
const express = require('express');

async function deleteUser(req, res) {
    const id = req.params["id"];
    try {
        const user = await User.findByPk(id);
        const deletedRows = await User.destroy({
            where: { id: id },
        });
        if (deletedRows > 0) {
            console.log('Usuario eliminado.');
        } else {
            console.log('No se encontró el usuario o no se eliminó ningún registro.');
        }
        res.status(201).json(user);
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }

}

async function getUser(req, res) {
    const id = req.params["id"];
    try {
        const user = await User.findByPk(id);
        res.status(200).json(user);
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }

}

async function getAllUsers(req, res) {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};

async function createUser(req, res) {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateUser(req, res) {
    try {
        const id = req.params["id"], changes = req.body;
        const { name, email } = changes;
        const [updatedRows] = await User.update({ name, email, password }, {
        where: { id: id },
        });

        if(updatedRows==1){
            const user = await User.findByPk(id);
            res.status(201).json(user);
        }
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
}

module.exports = {
    deleteUser,
    getUser,
    getAllUsers,
    createUser,
    updateUser
};
