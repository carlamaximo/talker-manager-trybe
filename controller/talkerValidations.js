const validateToken = (token) => {
  if (!token) {
    return { message: 'Token não encontrado' };
  }
  if (token.length !== 16) {
    return { message: 'Token inválido' };
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

const validateWatchedAtAndRate = (watchedAt, rate) => {
  const datRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  // console.log(!datRegex.test(watchedAt));
  
  if (typeof (watchedAt) === 'undefined' || typeof (rate) === 'undefined') {
    // console.log('entrei!');
    return { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' };
  }
  if (!datRegex.test(watchedAt)) {
    return { message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' };
  }
  return false;
};

const validateRate = (rate) => {
  if (!(rate > 1 && rate < 5)) return { message: 'O campo "rate" deve ser um inteiro de 1 à 5' };
  return false;
};

const validateTalk = (talk) => {
  if (!talk) {
    return { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' };
  }
  const { watchedAt, rate } = talk;
  validateWatchedAtAndRate(watchedAt, rate);
  validateRate(rate);
  return false;
};

module.exports = {
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  // validateRate,
};
