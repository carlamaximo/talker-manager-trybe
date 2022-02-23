const { validateToken } = require('../controller/talkerValidations');

const vToken = (req, res, next) => {
  const { authorization } = req.headers;
  const { message } = validateToken(authorization);
  if (message) return res.status(401).json({ message });

  next();
};

module.exports = { vToken };