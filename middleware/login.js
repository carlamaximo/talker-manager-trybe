const randtoken = require('rand-token');
const { validateEmail, validatePassword } = require('./loginValidations');
// font: https://www.npmjs.com/package/rand-token

const login = (req, res, _next) => {
  const token = randtoken.generate(16);
  const { email, password } = req.body;

  if (validateEmail(email)) return res.status(400).json(validateEmail(email));
  if (validatePassword(password)) return res.status(400).json(validatePassword(password));
  
  return res.status(200).json({ token });
};

module.exports = { login };
