const { compare } = require('bcrypt');
const { getEmail } = require('../../database/models');
const signToken = require('../../utils/signToken');
const { loginValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const loginHandler = async (req, res, next) => {
  try {
    const validateValue = await loginValidation(req.body);
    const checkedEmail = await getEmail(validateValue.email);
    if (!checkedEmail) throw customError('incorrect password or email ...', 401);
    const checkedPassword = await compare(validateValue.password, checkedEmail.password);
    if (!checkedPassword) throw customError('incorrect password or email ...', 401);
    const signTokenCookie = await signToken(checkedEmail.id);
    if (signTokenCookie) res.cookie('userToken', signTokenCookie);
    res.json({ msg: 'logged in successfully ..', data: { id: checkedEmail.id } });
  } catch (err) {
    if (err.name === 'ValidationError') next(customError(err.message, 401));
    return next(err);
  }
};
module.exports = loginHandler;
