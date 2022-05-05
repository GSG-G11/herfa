const { getHomeData } = require('./home');
const { getWorkPerPage } = require('./work');
const { getProfileInfo, addReview } = require('./user');
const { subServices } = require('./search');
const checkAuth = require('./middleware');

module.exports = {
  getHomeData,
  getWorkPerPage,
  getProfileInfo,
  addReview,
  subServices,
  checkAuth,
};
