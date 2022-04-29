const { getHomeData } = require('./home');
const { getWorkPerPage } = require('./work');
const { getProfileInfo, addReview } = require('./user');
const { subServices } = require('./search');

module.exports = {
  getHomeData,
  getWorkPerPage,
  getProfileInfo,
  addReview,
  subServices,
};
