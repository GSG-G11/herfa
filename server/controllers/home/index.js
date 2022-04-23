const { Location, Review, MainServices } = require('../../database/models');
const { customError } = require('../errors');

const Home = async (request, response, next) => {
  try {
    const locationFromDB = await Location.findAll();
    const mainServices = await MainServices.findAll();
    const reviewFromDB = await Review.findAll({
      limit: 10,
      where: {
        rate: 5,
      },
    });
    // eslint-disable-next-line max-len
    const data = { location: locationFromDB, topTenReviews: reviewFromDB, services: mainServices };
    response.json({ msg: 'Home page data', data });
  } catch (error) {
    next(customError('Database error', 502));
  }
};

module.exports = { Home };
