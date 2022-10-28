const categoriesService = require('../services/categoriesService');
const validateCategories = require('../middlewares/validateCategories');

const create = async (req, res) => {
  const validBody = validateCategories(req.body);
  if (validBody.error) return res.status(validBody.error.code).json(validBody.error.message);

  const result = await categoriesService.create(validBody);
  res.status(201).json(result);
};

const findAll = async (req, res) => {
  const result = await categoriesService.findAll();
  res.status(200).json(result);
}; 

module.exports = {
  create,
  findAll,
};