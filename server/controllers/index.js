const { getHomeData } = require('./home');
const {
  getWorkPerPage, deleteWork, addWork, editWork,
} = require('./work');
const {
  getProfileInfo, addReview, getSearchResult, uploadImageController,
} = require('./user');
const { subServices } = require('./search');
const loginHandler = require('./login');
const checkAuth = require('./middleware');
const { signUp } = require('./signup');
const emailCheck = require('./signup/checkIsEmailExists');
const { editUserData } = require('./editUserData');
const checkPhone = require('./signup/checkPhone');
const logOut = require('./logout');

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
  signUp,
  emailCheck,
  uploadImageController,
  editUserData,
  checkPhone,
  logOut,
};
