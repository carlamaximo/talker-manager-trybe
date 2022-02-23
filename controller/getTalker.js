const fs = require('fs/promises');

const getTalker = async (req, res) => {
  const { q } = req.query;
  const talkers = await fs.readFile('./talker.json', 'utf-8');
  const talkersParse = await JSON.parse(talkers);

  if (q === '') return res.status(200).json({ talkersParse });

  if (!q) return res.status(200).json([]);

  const filter = talkersParse.filter((elem) => elem.name.includes(q));
  return res.status(200).json(filter);
};

// const filterTalkers = async (req, res, _next) => {
//   const talkersData = await fs.readFile(talkerJSON)
//   .then((data) => JSON.parse(data));
//   const { q } = req.query;
//   const filteredTalkers = talkersData.filter((talker) => talker.name.includes(q));
//   console.log(filteredTalkers);

//   return res.status(200).send(filteredTalkers);
// };

module.exports = { getTalker };
