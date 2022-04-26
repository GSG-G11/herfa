const { Review, User } = require('../../database/models');
const { reviewValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const addReview = async (req, res, next) => {
  try {
    const result = await reviewValidation.validateAsync(req.body);
    const user = await User.findByPk(result.userId);
    if (!user) {
      throw customError('user does not exist', 400);
    }
    const checkReview = await Review.findOne({
      where: {
        userId: result.userId,
        phone: result.phone,
      },
    });
    if (checkReview) {
      throw customError('You have already reviewed this user', 400);
    }
    const data = await Review.create(result);
    res.status(201).json({ msg: 'Review added successfully', data });
  } catch (error) {
    next(customError(error.message, 400));
  }
};

module.exports = addReview;
