const loginService = require('../services/loginService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const result = await loginService.validateLogin(req.body);
    if (result.error) return res.status(result.error.code).json(result.error.message);
      res.status(200).json({ token: result });
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: error.message });
  }
};

module.exports = {
  login,
};