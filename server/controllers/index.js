const { getHomeData } = require('./home');
const { getWorkPerPage, deleteWork } = require('./work');
const { getProfileInfo, addReview, getSearchResult } = require('./user');
const { subServices } = require('./search');
const checkAuth = require('./middleware');

module.exports = {
  getHomeData,
  getWorkPerPage,
  getProfileInfo,
  addReview,
  subServices,
  checkAuth,
  deleteWork,
  getSearchResult,
};
