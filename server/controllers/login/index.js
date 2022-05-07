/* eslint-disable camelcase */
const { compare } = require('bcrypt');
const { User } = require('../../database/models');
const { signToken } = require('../../utils');
const { loginValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const loginHandler = async (req, res, next) => {
  try {
    const validatedValues = await loginValidation(req.body);
    const emailData = await User.findOne({ where: { email: validatedValues.email } });
    if (!emailData) {
      throw customError('incorrect password or email ...', 401);
    }
    const {
      id, password, first_name, last_name,
    } = emailData;
    const providerName = `${first_name} ${last_name}`;
    const checkedPassword = await compare(validatedValues.password, password);
    if (!checkedPassword) {
      throw customError('incorrect password or email ...', 401);
    }
    const signTokenCookie = await signToken(providerName, id);
    res.cookie('userToken', signTokenCookie);
    res.json({ msg: 'logged in successfully ..', data: { id, providerName } });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(customError(err.message, 400));
    }
    return next(err);
  }
};
module.exports = loginHandler;
