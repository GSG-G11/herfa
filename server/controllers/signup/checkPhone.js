const { User } = require('../../database/models');
const { customError } = require('../errors');
const { phoneValidation } = require('../../utils/validation/phoneValidaion');

const checkPhone = async (req, res, next) => {
  try {
    const { phone } = await phoneValidation.validateAsync(req.body);
    console.log(phone);
    const user = await User.findOne({
      where: { phone },
    });
    if (user) {
      throw customError('Phone already exists ...', 400);
    }
    res.json({ msg: 'Valid Phone' });
  } catch (err) {
    if (err.name === 'ValidationError') {
      return next(customError(err.message, 400));
    }
    return next(err);
  }
};
module.exports = checkPhone;
