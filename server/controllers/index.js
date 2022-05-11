const { getHomeData } = require('./home');
const {
  getWorkPerPage, deleteWork, addWork, editWork,
} = require('./work');
const { getProfileInfo, addReview, getSearchResult } = require('./user');
const { subServices } = require('./search');
const loginHandler = require('./login');
const checkAuth = require('./middleware');
const signUpHandler = require('./signUp');

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
  addWork,
  signUpHandler,
};
