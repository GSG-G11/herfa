const users = require('./users');
const works = require('./works');
const reviews = require('./review');
const services = require('./services');
const subServices = require('./subService');
const { sequelize } = require('../config');
const locations = require('./locations');
const {
  Location, MainServices, SubServices, Review, Work, User,
} = require('../models');

const build = async () => {
  try {
    await sequelize.sync({ force: true });

    await Promise.all([
      ...locations.map(async (location) => {
        const dbLocation = await Location.create(location);
        return dbLocation.id;
      }),
      ...services.map(async (service) => {
        const dbService = await MainServices.create(service);
        return dbService.id;
      }),

    ]);
    await Promise.all([
      ...users.map(async (user) => {
        const dbUser = await User.create(user);
        return dbUser.id;
      }),
      ...subServices.map(async (subService) => {
        const dbSubService = await SubServices.create(subService);
        return dbSubService.id;
      }),
    ]);
    await Promise.all([
      ...works.map(async (work) => {
        const dbWork = await Work.create(work);
        return dbWork.id;
      }),
      ...reviews.map(async (review) => {
        const dbReview = await Review.create(review);
        return dbReview.id;
      }),
    ]);
    console.log('DB insert successfully');
  } catch (err) {
    console.log(err.message, 'error when insert fake data');
  }
  return process.exit(0);
};

build();
