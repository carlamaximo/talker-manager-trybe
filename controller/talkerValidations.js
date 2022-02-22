const validateToken = (token) => {
  if (!token) {
    return { message: 'Token inválido' };
  }
  if (token.length !== 16) {
    return { message: 'Token não encontrado' };
  }
  return false;
};

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

const validateWatchedAt = (watchedAt, rate) => {
  const datRegex = /^\d{4}[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/;
  if (datRegex.test(watchedAt)) {
    return { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
  }
  if (!watchedAt || !rate) {
    return { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' };
  }
  return false;
};

const validateRate = (rate) => {
  if (!(rate > 1 && rate < 5)) return { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
  return false;
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  validateWatchedAt,
  validateRate,
};
