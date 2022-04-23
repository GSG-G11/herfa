const { Location, Review, MainServices } = require('../../database/models');
const { customError } = require('../errors');

const Home = async (request, response, next) => {
  try {
    console.log('Enter try in home Router');
    const locationFromDB = await Location.findAll();
    const mainServices = await MainServices.findAll();
    const reviewFromDB = await Review.findAll({
      limit: 10,
      where: {
        rate: 5,
      },
    });
    // eslint-disable-next-line max-len
    response.json({ location: locationFromDB, topTenReviews: reviewFromDB, services: mainServices });
  } catch (error) {
    next(customError('Database error', 502));
  }
};

module.exports = { Home };
