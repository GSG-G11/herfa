const { Op } = require('sequelize');

const { Location, SubServices, User } = require('../../database/models');
const { searchRequestValidation } = require('../../utils/validation');
const { customError } = require('../errors');

const getSearchResult = async (req, res, next) => {
  try {
    const {
      name, location, page,
    } = await searchRequestValidation.validateAsync(req.query);
    console.log(req.query);
    const users = await User.findAll({
      where: {
        [Op.or]: [
          {
            first_name: {
              [Op.iLike]: `%${name}%`,
            },
          },
          {
            locationId: +location,
          },
        ],
      },
      include: [{ model: Location }, { model: SubServices }],
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
      limit: 10,
      offset: (page - 1) * 10,
    });
    if (!users) {
      throw customError('user does not exist', 400);
    }
    res.status(200).json({ msg: 'Search result', data: users });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(customError(error.message, 400));
    }
    next(error);
  }
};

module.exports = getSearchResult;
