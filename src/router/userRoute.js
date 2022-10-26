const { Router } = require('express');
const userController = require('../controllers/userController');

const route = Router();

route.post('/', userController.createUser);

module.exports = route;