/* eslint-disable camelcase */
const { compare } = require('bcrypt');
const { User } = require('../../database/models');
const { signToken } = require('../../utils');
const { loginValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const loginHandler = async (req, res, next) => {
  try {
    const { email: userEmail, password } = await loginValidation(req.body);
    const userData = await User.findOne({
      where: { email: userEmail },
    });
    if (!userData) {
      throw customError('incorrect password or email ...', 401);
    }
    const {
      id, password: hashedPassword, first_name, last_name,
    } = userData;
    const providerName = `${first_name} ${last_name}`;
    const checkedPassword = await compare(password, hashedPassword);
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
