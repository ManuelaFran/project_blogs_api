const { User } = require('../models');
const jwt = require('../utils/jwt.util');

const createUser = async (body) => {
  const user = await User.findOne({ where: { email: body.email } });
  if (user) return { error: { code: 409, message: { message: 'User already registered' } } };
  await User.create(body);
  const { password, image, ...userWithoutPassword } = body;
  return jwt.createToken(userWithoutPassword);
};

const findAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
  createUser,
  findAll,
};