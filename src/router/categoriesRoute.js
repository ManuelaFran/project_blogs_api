const { Router } = require('express');
const categoriesController = require('../controllers/categoriesController');
const validateToken = require('../middlewares/validateToken');

const route = Router();

route.get('/', validateToken.validateToken, categoriesController.findAll);
route.post('/', validateToken.validateToken, categoriesController.create);

module.exports = route;