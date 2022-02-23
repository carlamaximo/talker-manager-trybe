const fs = require('fs');

const getTalker = (req, res) => {
  const { q } = req.query;
  const talkers = JSON.parse(fs.readFileSync('./talker.json'));

  if (q === '') return res.status(200).json({ talkers });

  if (!q) return res.status(200).json([]);

  const filter = talkers.filter((elem) => elem.contains(q));

  return res.status(200).json({ filter });
};

module.exports = { getTalker };
