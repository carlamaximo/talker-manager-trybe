const { validateRate } = require('../controller/talkerValidations');

const vRate = (req, res, next) => {
  const { talk } = req.body;
  const result = validateRate(talk.rate);
  if (result) return res.status(400).json({ message: result.message });
  next();
};

module.exports = { vRate };