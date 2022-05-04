const { compare } = require('bcrypt');
const { getEmail } = require('../../database/models');
const { loginValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const loginHandler = async (req, res, next) => {
  try {
    const validateValue = await loginValidation(req.body);
    const checkedEmail = await getEmail(validateValue.email);
    if (!checkedEmail) throw customError('incorrect password or email ...', 400);
    const checkedPassword = await compare(validateValue.password, checkedEmail.password);
    if (!checkedPassword) throw customError('incorrect password or email ...', 400);
    res.json({ msg: 'logged in successfully ..', data: { id: checkedEmail.id } });
  } catch (err) {
    if (err.name === 'ValidationError') next(customError(err.message, 400));
    return next(err);
  }
};
module.exports = loginHandler;
