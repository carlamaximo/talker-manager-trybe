const fs = require('fs');
const {
  validateToken,
  validateName,
  validateAge,
  validateWatchedAt,
  validateRate,
} = require('./talkerValidations');

const postTalker = (req, res) => {
  const { body } = req;
  const talkers = JSON.parse(fs.readFileSync('./talker.json'));
  const newTalker = { id: talkers.length + 1, ...body };
  talkers.push(newTalker);
  fs.writeFileSync('./talker.json', JSON.stringify(talkers));
  return res.status(201).send(newTalker);
};

const vToken = (req, res, next) => {
  const { token } = req.headers.authorization;
  if (validateToken(token)) return res.status(401).json(validateToken(token));
  next();
};

const otherValidations = async (req, res, _next) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;

  if (validateName(name)) return res.status(400).json(validateName(name));

  if (validateAge(age)) return res.status(400).json(validateAge(age));

  if (validateWatchedAt(watchedAt, rate)) {
    return res.status(400).json(validateWatchedAt(watchedAt, rate));
  }

  if (validateRate(rate)) return res.status(400).json(validateRate(rate));
};

module.exports = { postTalker, vToken, otherValidations };
