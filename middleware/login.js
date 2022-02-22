const randtoken = require('rand-token');
// font: https://www.npmjs.com/package/rand-token

const login = (req, res, _next) => {
  const token = randtoken.generate(16);

  const { email, password } = req.body;

  const regexEmail = /\S+@\S+\.\S+/;
  // font: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!regexEmail.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  if(!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' })
  }

  if(password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  return res.status(200).json({ token });
};

module.exports = { login };
