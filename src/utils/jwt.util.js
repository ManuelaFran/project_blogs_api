require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET, {
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    if (!token) return { error: { code: 401, message: { message: 'Token not found' } } };
    const { data } = jwt.verify(token, process.env.JWT_SECRET);
    return data;
  } catch (error) {
    return { error: { code: 401, message: { message: 'Expired or invalid token' } } };
  }
};

module.exports = {
  createToken,
  validateToken,
};