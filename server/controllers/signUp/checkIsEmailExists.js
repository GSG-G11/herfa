const { User } = require('../../database/models');
const { customError } = require('../errors');
const { emailValidation } = require('../../utils/validation');

const signUpHandler = async (req, res, next) => {
  try {
    const ValidationRequest = await emailValidation.validateAsync(req.body);
    const { email } = ValidationRequest;
    console.log(req.body);
    const user = await User.findOne({
      where: { email },
    });
    console.log(user);
    if (user) {
      throw customError('Email already exists ...', 400);
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
