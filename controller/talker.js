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

// const create = async (req, res, next) => {
//   try {
//     await fs.appendFile(FILETALKER, req.body.talkers);
//     return res.status(200).end();
//   } catch(err) {
//     next(err);
//   }
// };

module.exports = { read };