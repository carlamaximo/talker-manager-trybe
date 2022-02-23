const { validateToken } = require('../controller/talkerValidations');

const vToken = (req, res, next) => {
  const { authorization: token } = req.headers;
  const { message } = validateToken(token);
  if (message) return res.status(401).json({ message });
  next();
};

module.exports = { vToken };