const validateEmail = (email) => {
  // font: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript

  const regexEmail = /\S+@\S+\.\S+/;
  if (!email) {
    return { message: 'O campo "email" é obrigatório' };
  }
  if (!regexEmail.test(email)) {
    return { message: 'O "email" deve ter o formato "email@email.com"' };
  }

  return false;
};

const validatePassword = (password) => {
  if (!password) {
    return { message: 'O campo "password" é obrigatório' };
  }
  if (password.length < 6) {
    return { message: 'O "password" deve ter pelo menos 6 caracteres' };
  }

  return false;
};

module.exports = { validateEmail, validatePassword };
