const { Category } = require('../models');

const create = async (body) => {
  const category = await Category.create(body);
  const dataValues = category.toJSON();
  return dataValues;
};

module.exports = {
  create,
};