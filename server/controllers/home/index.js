const { Location, Review, MainServices } = require('../../database/models');

const Home = async (request, response) => {
  const locationFromDB = await Location.findAll();
  const mainServices = await MainServices.findAll();
  const reviewFromDB = await Review.findAll({
    limit: 10,
    where: {
      rate: 5,
    },
  });
  response.json({ location: locationFromDB, topTenReviews: reviewFromDB, services: mainServices });
};

module.exports = { Home };
