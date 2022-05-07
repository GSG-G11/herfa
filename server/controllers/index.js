const { getHomeData } = require('./home');
const { getWorkPerPage } = require('./work');
const { getProfileInfo, addReview, getSearchResult } = require('./user');
const { subServices } = require('./search');
const loginHandler = require('./login');
const checkAuth = require('./middleware');

module.exports = {
  getHomeData,
  getWorkPerPage,
  getProfileInfo,
  addReview,
  subServices,
  loginHandler,
  checkAuth,
  getSearchResult,
};
