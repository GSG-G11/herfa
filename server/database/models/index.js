const { MainServices } = require('./mainServices');
const { SubServices } = require('./subServices');
const { User } = require('./user');
const { Work } = require('./work');
const { Location } = require('./location');
const { Review } = require('./review');
const { ServiceUser } = require('./serviceUser');

module.exports = {
  User,
  Work,
  MainServices,
  SubServices,
  Location,
  Review,
  ServiceUser,
};
