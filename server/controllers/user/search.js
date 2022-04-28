const { fn, col } = require('sequelize');

const { User, Review, Location } = require('../../database/models');
// const { searchRequestValidation } = require('../../utils/validation');
// const { customError } = require('../errors');

const getUsersWithReviews = async (req, res, next) => {
  try {
    const users = await Review.findAll({
      attributes: [[fn('AVG', col('reviews.rate')), 'avgRating']],
      include: {
        model: User,
        where: { first_name: 'صباح' },
        include: {
          model: Location,
          where: {
            id: 1,
          },
        },
      },
      group: ['reviews.userId', 'user.id'],
    });
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = getUsersWithReviews;
