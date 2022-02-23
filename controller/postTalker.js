const fs = require('fs');

const postTalker = (req, res) => {
  const { body } = req;
  const talkers = JSON.parse(fs.readFileSync('./talker.json'));
  const newTalker = { id: talkers.length + 1, ...body };
  console.log('newTalker', newTalker);
  talkers.push(newTalker);
  fs.writeFileSync('./talker.json', JSON.stringify(talkers, null, 2));
  return res.status(201).send(newTalker);
};

module.exports = { postTalker };
