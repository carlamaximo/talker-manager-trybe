const fs = require('fs/promises');

const postTalker = async (req, res) => {
  const { body } = req;
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  const talkersParse = await JSON.parse(talkers);
  const newTalker = { id: talkersParse.length + 1, ...body };
  
  talkersParse.push(newTalker);
  await fs.writeFile('./talker.json', JSON.stringify(talkersParse, null, 2), 'utf-8');
  return res.status(201).json(newTalker);
};

module.exports = { postTalker };
