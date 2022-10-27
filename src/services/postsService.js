const { BlogPost, User, Category } = require('../models');

const findAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const findByPk = async (id) => {
  const posts = await BlogPost.findByPk(id, {
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  if (!posts) return { error: { code: 404, message: { message: 'Post does not exist' } } };
  return posts;
};

module.exports = {
  findAll,
  findByPk,
};