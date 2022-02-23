const express = require('express');
const bodyParser = require('body-parser');
// const rescue = require('express-rescue');
const talker = require('./controller/talker');
const { login } = require('./middleware/login');
const { vToken } = require('./middleware/validateToken');
const { vName } = require('./middleware/validateName');
const { vAge } = require('./middleware/validateAge');
const { vTalk } = require('./middleware/validateTalker');
const { vRate } = require('./middleware/validateRate');
const { vWatchedAt } = require('./middleware/validateWatched');
const { postTalker } = require('./controller/postTalker');
// const putTalker = require('./controller/putTalker');
const { getTalker } = require('./controller/getTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', talker.read);
app.get('/talker/:id', talker.searchById);
app.post('/login', login);
app.get('/talker/search', vToken, getTalker);
app.post('/talker', vToken, vName, vAge, vTalk, vRate, vWatchedAt, postTalker);
// app.put('/taker/:id', vToken, vName, vAge, vTalk, vRate, vWatchedAt, putTalker);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
