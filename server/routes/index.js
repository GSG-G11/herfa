const router = require('express').Router();
const {
  getProfileInfo,
  addReview,
  getHomeData,
  getWorkPerPage,
  editWork,
  loginHandler,
  getSearchResult,
  subServices,
  deleteWork,
  checkAuth,
  addWork,
  signUp,
  emailCheck,
  editUserData,
  logOut,
} = require('../controllers');

router.get('/logout', logOut);
router.get('/providers/:id', getProfileInfo);
router.get('/', getHomeData);
router.get('/provider', getSearchResult);
router.get('/work/:providerId', getWorkPerPage);
router.get('/subservices/:mainServiceId', subServices);
router.post('/login', loginHandler);
router.post('/reviews', addReview);
router.post('/checkEmail', emailCheck);
router.post('/signup', signUp);
router.use(checkAuth);
router.patch('/provider/:id', editUserData);
router.patch('/work/', editWork);
router.delete('/work/:id', deleteWork);
router.post('/work', addWork);
module.exports = router;
