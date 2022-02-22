const fs = require('fs/promises');

const FILETALKER = 'talker.json';

const read = async (_req, res, next) => {
  if (!FILETALKER) return res.status(200).json([]);
  try {
    const data = await fs.readFile(FILETALKER, 'utf8');
    return res.status(200).json(JSON.parse(data));
    } catch(err) {
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

// const create = async (req, res, next) => {
//   try {
//     await fs.appendFile(FILETALKER, req.body.talkers);
//     return res.status(200).end();
//   } catch(err) {
//     next(err);
//   }
// };

module.exports = { read, searchById };