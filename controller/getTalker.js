const fs = require('fs');

const getTalker = (req, res) => {
  const { q } = req.query;
  const talkers = JSON.parse(fs.readFileSync('./talker.json'));

  if (q === '') return res.status(200).json({ talkers });

  if (!q) return res.status(200).json([]);

  if (q) {
    const filter = talkers.filter((elem) => elem.name.includes(q));
    return res.status(200).send(filter);
  }
};

module.exports = { getTalker };
