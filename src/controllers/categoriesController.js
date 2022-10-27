const categoriesService = require('../services/categoriesService');
const validateCategories = require('../middlewares/validateCategories');
const jwt = require('../utils/jwt.util');

const create = async (req, res) => {
  const token = req.headers.authorization;
  const validation = jwt.validateToken(token);
  if (validation.error) return res.status(validation.error.code).json(validation.error.message);
  
  const validBody = validateCategories(req.body);
  if (validBody.error) return res.status(validBody.error.code).json(validBody.error.message);

  const result = await categoriesService.create(validBody);
  res.status(201).json(result);
};

const findAll = async (req, res) => {
  const token = req.headers.authorization;
  const validation = jwt.validateToken(token);
  if (validation.error) return res.status(validation.error.code).json(validation.error.message);

  const result = await categoriesService.findAll();
  res.status(200).json(result);
}; 

module.exports = {
  create,
  findAll,
};