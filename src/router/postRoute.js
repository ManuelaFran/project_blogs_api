const { Router } = require('express');
const postsController = require('../controllers/postsController');
const validateToken = require('../middlewares/validateToken');

const route = Router();

route.get('/:id', validateToken.validateToken, postsController.findByPk);
route.get('/', validateToken.validateToken, postsController.findAll);
route.put('/:id', postsController.update);

module.exports = route;