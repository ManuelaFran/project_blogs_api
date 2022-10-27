const { Router } = require('express');
const postsController = require('../controllers/postsController');

const route = Router();

route.get('/', postsController.findAll);

module.exports = route;