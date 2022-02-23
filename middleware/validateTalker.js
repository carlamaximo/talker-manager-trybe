const { validateTalk } = require('../controller/talkerValidations');

const vTalk = (req, res, next) => {
  const { talk } = req.body;
  const { message } = validateTalk(talk);
  if (message) return res.status(400).json({ message });
  next();
};

module.exports = { vTalk };