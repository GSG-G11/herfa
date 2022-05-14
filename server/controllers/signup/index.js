/* eslint-disable camelcase */
const { User } = require('../../database/models');
const { customError } = require('../errors');
const { signUpValidation } = require('../../utils/validation');

const signUpHandler = async (req, res, next) => {
  try {
    const ValidationRequest = await signUpValidation.validateAsync(req.body);
    const { email } = ValidationRequest;
    console.log(req.body);
    const user = await User.findOne({
      where: { email },
    });
    // console.log(user.email);
    console.log(user);
    if (user) {
      // if (user.email === email) {
      throw customError('Email already exists ...', 400);
      // }
    }
    res.json({ msg: 'Sign up successful', status: 200 });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(customError(err.message, 400));
    }
    return next(err);
  }
};
module.exports = signUpHandler;
