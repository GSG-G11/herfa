const { MainServices } = require('./mainServices');
const { SubServices } = require('./subServices');
const { User } = require('./user');
const { Work } = require('./work');
const { Location } = require('./location');
const { Review } = require('./review');
const getEmail = require('./getDataUsingEmail');

module.exports = {
  User,
  Work,
  MainServices,
  SubServices,
  Location,
  Review,
  getEmail,
};
