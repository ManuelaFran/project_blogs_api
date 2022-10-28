const { Router } = require('express');
const userController = require('../controllers/userController');
const validateToken = require('../middlewares/validateToken');

const route = Router();

route.get('/:id', validateToken.validateToken, userController.findByPk);
route.get('/', validateToken.validateToken, userController.findAll);
route.post('/', userController.createUser);

module.exports = route;