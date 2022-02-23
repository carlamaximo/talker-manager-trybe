const { validateWatched } = require('../controller/talkerValidations');

const vWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const result = validateWatched(talk.watchedAt);
  if (result) return res.status(400).json({ message: result.message });
  next();
};

module.exports = { vWatchedAt };