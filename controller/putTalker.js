const fs = require('fs/promises');

const putTalker = async (req, res) => {
  const { body, params: { id } } = req;
  const talkers = await fs.readFile('./talker.json');
  const talkersParse = await JSON.parse(talkers);

  const editTalker = { id: Number(id), ...body };
  const filter = talkersParse.filter((elem) => elem.id !== id);

  filter.push(editTalker);
  await fs.writeFile('./talker.json', JSON.stringify(filter));
  return res.status(200).json(editTalker);
};

module.exports = { putTalker };