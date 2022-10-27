const postsService = require('../services/postsService');
const jwt = require('../utils/jwt.util');

const findAll = async (req, res) => {
  const token = req.headers.authorization;
  const validation = jwt.validateToken(token);
  if (validation.error) return res.status(validation.error.code).json(validation.error.message);

  const posts = await postsService.findAll();
    res.status(200).json(posts);
  };

  const findByPk = async (req, res) => {
    const token = req.headers.authorization;
    const validation = jwt.validateToken(token);
    if (validation.error) return res.status(validation.error.code).json(validation.error.message);
    const { id } = req.params;
    const result = await postsService.findByPk(id);
    if (result.error) return res.status(result.error.code).json(result.error.message);
    res.status(200).json(result);
  };

module.exports = {
  findAll,
  findByPk,
};