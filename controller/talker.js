const fs = require('fs/promises');
const { validateName, validateAge } = require('./talkerValidations');

const FILETALKER = 'talker.json';

const read = async (_req, res, next) => {
  if (!FILETALKER) return res.status(200).json([]);
  try {
    const data = await fs.readFile(FILETALKER, 'utf8');
    return res.status(200).json(JSON.parse(data));
    } catch (err) {
      next(err);
    }
};

const searchById = async (req, res, _next) => {
  const data = await fs.readFile(FILETALKER);

  const { id } = req.params;

  const talker = (JSON.parse(data)).find((elem) => elem.id === parseInt(id, 10));

  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talker);
};

const create = async (req, res, _next) => {
  // try {
  //   await fs.appendFile(FILETALKER, req.body.talkers);
  //   return res.status(200).end();
  const { token } = req.header.authorization;
  const { name, age } = req.body;

  if (!token) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (token.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  
  if (validateName(name)) return res.status(400).json(validateName(name));
  if (validateAge(age)) return res.status(400).json(validateAge(age));
};

module.exports = { read, searchById, create };