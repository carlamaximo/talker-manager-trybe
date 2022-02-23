const fs = require('fs');

const putTalker = (req, res) => {
  const { id } = req.params;
  const talkers = JSON.parse(fs.readFileSync('./talker.json'));
  const filter = talkers.filter((elem) => elem.id === Number(id));
  return res.status(200).json({ filter });
};

module.exports = { putTalker };