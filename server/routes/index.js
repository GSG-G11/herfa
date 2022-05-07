const router = require('express').Router();
const {
  getHomeData,
  getWorkPerPage,
  getProfileInfo,
  addReview,
  loginHandler,
  getSearchResult,
  subServices,
  // checkAuth,
} = require('../controllers');

// router.use(checkAuth);
router.get('/providers/:id', getProfileInfo);
router.get('/', getHomeData);
// http://localhost:3030/api/v1/provider/?name=صالح&location=1&service=1&subservice=1,2,3&page=1
router.get('/provider', getSearchResult);
router.get('/work/:providerId', getWorkPerPage);
router.get('/subservices/:mainServiceId', subServices);
router.post('/login', loginHandler);

router.post('/reviews', addReview);
module.exports = router;
