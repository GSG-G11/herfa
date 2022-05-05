const router = require('express').Router();

const {
  getHomeData, getWorkPerPage, getProfileInfo, addReview, subServices, loginHandler,
  // checkAuth,
} = require('../controllers');

// router.use(checkAuth);
router.get('/providers/:id', getProfileInfo);
router.get('/', getHomeData);
router.get('/work/:providerId', getWorkPerPage);
router.get('/subservices/:mainServiceId', subServices);
router.post('/login', loginHandler);

router.post('/reviews', addReview);
module.exports = router;
