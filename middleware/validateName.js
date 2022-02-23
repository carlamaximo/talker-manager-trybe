const { validateName } = require('../controller/talkerValidations');

const vName = (req, res, next) => {
  const { name } = req.body;
  const { message } = validateName(name);
  if (message) return res.status(400).json({ message });
  next();
};

module.exports = { vName };