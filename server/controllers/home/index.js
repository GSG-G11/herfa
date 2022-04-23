const { Location, Review, MainServices } = require('../../database/models');
const { customError } = require('../errors');

const getHomeData = async (request, response, next) => {
  try {
    const data = await Promise.all([{
      location: await Location.findAll(),
      services: await MainServices.findAll(),
      topTenReviews: await Review.findAll({
        limit: 10,
        where: {
          rate: 5,
        },
      }),
    }]);
    response.json({ msg: 'Home Data', data });
  } catch (error) {
    next(customError('Database error', 502));
  }
};

module.exports = { getHomeData };
