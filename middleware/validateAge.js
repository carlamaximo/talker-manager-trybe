const { validateAge } = require('../controller/talkerValidations');

const vAge = (req, res, next) => {
  const { age } = req.body;
  const { message } = validateAge(age);
  if (message) return res.status(400).json({ message });
  next();
};

module.exports = { vAge };