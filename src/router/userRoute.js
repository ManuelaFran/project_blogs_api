const { Router } = require('express');
const userController = require('../controllers/userController');

const route = Router();

route.get('/:id', userController.findByPk);
route.get('/', userController.findAll);
route.post('/', userController.createUser);

module.exports = route;