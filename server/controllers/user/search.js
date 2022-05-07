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
    const subServiceArray = req.query.subservice?.split(',');
    const {
      name, location, service, subservice, page = 1,
    } = await searchRequestValidation.validateAsync({ ...req.query, subservice: subServiceArray });
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
    if (req.query.subservice) {
      where['$services.id$'] = subservice;
    }
    if (service) {
      where.mainServiceId = +service;
    }
    console.log(where);
    const { count, rows } = await User.findAndCountAll({
      limit: 6,
      offset: (page - 1) * 6,
      where,
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
      include: [
        { model: Location },
        { model: SubServices, duplicating: false },
        { model: MainServices },
      ],
    });
    if (!rows.length) {
      return res.status(200).json({
        msg: 'search result',
        count,
        data: rows,
      });
    }
    const reviews = await Promise.all(
      rows.map(async (user) => {
        const reviewAvg = await Review.findAll({
          where: { userId: user.id },
          attributes: [[fn('AVG', col('reviews.rate')), 'avgRating']],
          raw: true,
          group: ['reviews.userId'],
        });
        const tempUser = { ...user.dataValues, avgRating: reviewAvg[0].avgRating };
        return tempUser;
      }),
    );
    return res.status(200).json({
      msg: 'search result',
      count,
      data: reviews,
    });
  } catch (error) {
    console.log(error);
    if (error.name === 'ValidationError') {
      next(customError(error.message, 400));
    } else {
      next(error);
    }
  }
};

module.exports = getSearchResult;
