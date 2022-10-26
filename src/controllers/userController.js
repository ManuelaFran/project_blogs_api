const userService = require('../services/userService');
const validateUser = require('../middlewares/validateUser');
const jwt = require('../utils/jwt.util');

const createUser = async (req, res) => {
  try {
    const validation = validateUser(req.body);
    if (validation.error) return res.status(validation.error.code).json(validation.error.message);
    const result = await userService.createUser(req.body);
    if (result.error) return res.status(result.error.code).json(result.error.message);
    res.status(201).json({ token: result });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

const findAll = async (req, res) => {
  const token = req.headers.authorization;
  const validation = jwt.validateToken(token);
  if (validation.error) return res.status(validation.error.code).json(validation.error.message);
  const result = await userService.findAll();
  res.status(200).json(result);
};

module.exports = {
  createUser,
  findAll,
};