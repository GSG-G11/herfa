const { getHomeData } = require('./home');
const { editWork } = require('./work');
const { getWorkPerPage, deleteWork } = require('./work');
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
  editWork,
  deleteWork,
  getSearchResult,
};
