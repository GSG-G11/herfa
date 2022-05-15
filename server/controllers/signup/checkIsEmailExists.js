const { User } = require('../../database/models');
const { customError } = require('../errors');
const { emailValidation } = require('../../utils/validation');

const emailCheck = async (req, res, next) => {
  try {
    const { email } = await emailValidation.validateAsync(req.body);
    const user = await User.findOne({
      where: { email },
    });
    if (user) {
      throw customError('Email already exists ...', 400);
    }
    res.json({ msg: 'Valid Email' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(customError(err.message, 400));
    }
    return next(err);
  }
};
module.exports = emailCheck;
