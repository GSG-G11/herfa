const { compare } = require('bcrypt');
const { getEmail } = require('../../database/models');
const { loginValidaion } = require('../../utils/validation');
const { customError } = require('../errors');

const loginHandler = async (req, res, next) => {
  try {
    const { password } = await req.body;
    await loginValidaion(req.body)
      .then((data) => getEmail(data.email))
      .then((result) => {
        if (!result) throw customError('incorrect password or email ...', 400);
        return result;
      })
      .then((data) => compare(password, data.password))
      .then((data) => {
        if (!data) throw customError('incorrect password or email ...', 400);
        res.json({ message: 'logged in successfully ..' });
      });
    // .catch((err) => { throw customError(err.details[0].message, 400); });
  } catch (err) {
    if (err.name === 'ValidationError') {
      // console.log(err);
      next(customError(err.message, 400));
      return next(err);
    }
    // console.log(err.message);
    next(err);
  }
};
module.exports = loginHandler;
