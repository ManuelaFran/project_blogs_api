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

const update = async (body, id, email) => {
  const user = await User.findOne({ where: { email } });
  const post = await BlogPost.findByPk(id);
  if (user.toJSON().id !== post.toJSON().userId) {
    return { error: { code: 401, message: { message: 'Unauthorized user' } } };
  }
  await BlogPost.update(body, { where: { id } });
  const updatePost = await BlogPost.findByPk(id, {
    include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return updatePost;
};

module.exports = {
  findAll,
  findByPk,
  update,
};