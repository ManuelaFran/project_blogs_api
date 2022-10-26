const { User } = require('../models');
const jwt = require('../utils/jwt.util');

const validateLogin = async (body) => {
  const user = await User.findOne({ where: { email: body.email } });

  if (!user || user.password !== body.password) {
    return { error: { code: 400, message: { message: 'Invalid fields' } } };
  }
  const dataValues = user.toJSON();
  const { id, password, image, ...userWithoutPassword } = dataValues;
  return jwt.createToken(userWithoutPassword);
};

module.exports = {
  validateLogin,
};