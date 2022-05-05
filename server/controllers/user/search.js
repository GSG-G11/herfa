const { Op, fn, col } = require('sequelize');

const { searchRequestValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const {
  Location,
  User,
  SubServices,
  Review,
  MainServices,
} = require('../../database/models');

const getSearchResult = async (req, res, next) => {
  try {
    const {
      name, location, service, subservice, page,
    } = await searchRequestValidation.validateAsync(req.query);
    const where = {};
    if (name) {
      where[Op.or] = [
        {
          first_name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        {
          last_name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      ];
    }
    if (location) {
      where.locationId = location;
    }
    if (subservice) {
      const subServiceArray = subservice?.split(',');
      where['$services.id$'] = subServiceArray;
    }
    if (service) {
      where.mainServiceId = +service;
    }
    const { count, rows } = await User.findAndCountAll({
      limit: 6,
      offset: (page - 1) * 6,
      where,
      include: [
        { model: Location },
        { model: SubServices },
        { model: MainServices },
      ],
    });
    const reviews = await Promise.all(
      rows.map(async (user) => {
        const reviewAvg = await Review.findAll({
          where: { userId: user.id },
          attributes: [[fn('AVG', col('reviews.rate')), 'avgRating']],
          raw: true,
          group: ['reviews.userId'],
        });
        return reviewAvg;
      }),
    );
    const usersWithReviews = rows.map((user, index) => ({
      ...user.dataValues,
      avgRating: reviews[index][0].avgRating,
    }));
    return res.status(200).json({
      msg: 'search result',
      count,
      data: usersWithReviews,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      next(customError(error.message, 400));
    } else {
      next(error);
    }
  }
};

module.exports = getSearchResult;
