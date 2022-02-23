const fs = require('fs');

const putTalker = (req, res) => {
  const id = Number(req.params.id);
  const talkers = JSON.parse(fs.readFileSync('./talker.json'));

  const editTalker = { id, ...req.body };
  const map = talkers.map((elem) => {
    if (elem.id === id) return editTalker;
    return elem;
  });

  fs.writeFileSync('./talker.json', JSON.stringify(map));
  return res.status(200).json({ editTalker });
};

module.exports = { putTalker };