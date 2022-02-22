const validateName = (name) => {
  if (!name) {
    return { message: 'O campo "name" é obrigatório' };
  }
  if (name.length < 3) {
    return { message: 'O "name" deve ter pelo menos 3 caracteres' };
  }
  return false;
};

const validateAge = (age) => {
  if (!age) {
    return { message: 'O campo "age" é obrigatório' };
  }

  if (age < 18) {
    return { message: 'A pessoa palestrante deve ser maior de idade' };
  }

  return false;
};

module.exports = { validateName, validateAge };
