const { Location, Review, MainServices } = require('../../database/models');
const { customError } = require('../errors');

const getHomeData = async (request, response, next) => {
  try {
    const receivedData = await Promise.all([
      Location.findAll({ attributes: ['city'] }),
      MainServices.findAll({ attributes: ['name'] }),
      Review.findAll({
        limit: 10,
        where: {
          rate: 5,
        },
        attributes: ['rate', 'content', 'userId'],
      }),
    ]);
    response.json({ msg: 'Home Data', data: { location: receivedData[0], services: receivedData[1], topTenReviews: receivedData[2] } });
  } catch (error) {
    next(customError('Database error', 502));
  }
};

module.exports = { getHomeData };
