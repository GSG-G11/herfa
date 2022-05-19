const {
  Location, Review, MainServices, User,
} = require('../../database/models');
const { customError } = require('../errors');

const getHomeData = async (request, response, next) => {
  try {
    const receivedData = await Promise.all([
      Location.findAll({ attributes: ['city', 'id'] }),
      MainServices.findAll({ attributes: ['name', 'id'] }),
      Review.findAll({
        limit: 10,
        where: {
          rate: 5,
        },
        attributes: ['rate', 'content', 'userId'],
      }),
      User.findAll({ attributes: ['first_name', 'last_name', 'id'] }),
    ]);
    response.json({
      msg: 'Home Data',
      data: {
        location: receivedData[0],
        services: receivedData[1],
        topTenReviews: receivedData[2],
        users: receivedData[3],
      },
    });
  } catch (error) {
    next(customError('Database error', 502));
  }
};

module.exports = { getHomeData };
