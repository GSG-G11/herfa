const router = require('express').Router();
const {
  getHomeData, getWorkPerPage, getProfileInfo, addReview, subServices, deleteWork, checkAuth,
  getSearchResult,
} = require('../controllers');

// router.use(checkAuth);
router.get('/providers/:id', getProfileInfo);
router.get('/', getHomeData);
// http://localhost:3030/api/v1/provider/?name=صالح&location=1&service=1&subservice=1,2,3&page=1
router.get('/provider', getSearchResult);
router.get('/work/:providerId', getWorkPerPage);
router.get('/subservices/:mainServiceId', subServices);
router.post('/reviews', addReview);
router.delete('/work/:id', checkAuth, deleteWork);
module.exports = router;
