const postsService = require('../services/postsService');
const jwt = require('../utils/jwt.util');
const validatePost = require('../middlewares/validatePost');

  const findAll = async (_req, res) => {
    const posts = await postsService.findAll();
    res.status(200).json(posts);
  };

  const findByPk = async (req, res) => {
    const { id } = req.params;
    const result = await postsService.findByPk(id);
    if (result.error) return res.status(result.error.code).json(result.error.message);
    res.status(200).json(result);
  };

  const update = async (req, res) => {
    const token = req.headers.authorization;
    const validation = jwt.validateToken(token);
    if (validation.error) return res.status(validation.error.code).json(validation.error.message);

    const validationBody = validatePost(req.body);
    if (validationBody.error) {
      return res.status(validationBody.error.code).json(validationBody.error.message);
    }

    const { id } = req.params;
    const { email } = validation;
    const updatePost = await postsService.update(validationBody, id, email);
    if (updatePost.error) return res.status(updatePost.error.code).json(updatePost.error.message);
    res.status(200).json(updatePost);
  };

module.exports = {
  findAll,
  findByPk,
  update,
};