const router = require('express').Router();

const {
  getHomeData, getWorkPerPage, getProfileInfo, addReview, subServices, deleteWork, checkAuth,
} = require('../controllers');

// router.use(checkAuth);
router.get('/providers/:id', getProfileInfo);
router.get('/', getHomeData);
router.get('/work/:providerId', getWorkPerPage);
router.get('/subservices/:mainServiceId', subServices);
router.post('/reviews', addReview);
router.delete('/work/:id', checkAuth, deleteWork);
module.exports = router;
