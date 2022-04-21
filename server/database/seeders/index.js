const userSeeder = require('./users');
const locationSeeder = require('./locations');
const servicesSeeder = require('./services');
const subServicesSeeder = require('./subService');
const worksSeeder = require('./works');
const reviewsSeeder = require('./review');

reviewsSeeder();
worksSeeder();
servicesSeeder();
subServicesSeeder();
locationSeeder();
userSeeder();
