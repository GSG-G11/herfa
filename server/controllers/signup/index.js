const { User } = require('../../database/models');
const { signUpValidation } = require('../../utils/validation');
const { customError } = require('../errors');
const { checkIsUserExists } = require('./checkIsUserExists');
const { generateToken } = require('./generateToken');
const { getDataToInsert } = require('./dataToInsert');

const signUp = async (req, res, next) => {
  try {
    const userData = await signUpValidation.validateAsync(req.body);
    const message = await checkIsUserExists(userData);
    if (message) throw customError(message, 400);
    const dataToInsert = await getDataToInsert(userData);
    const user = await User.create(dataToInsert);
    const { token, data } = await generateToken(user);
    res.status(201).cookie('userToken', token).json({ msg: 'logged in successfully', data });
  } catch (err) {
    if (err.name === 'ValidationError') {
      next(customError(err.message, 400));
    }
    return next(err);
  }
};

module.exports = { signUp };
