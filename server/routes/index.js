const router = require('express').Router();
const {
  getProfileInfo, addReview, getSearchResult, getWorkPerPage, getHomeData,
} = require('../controllers');

router.get('/providers/:id', getProfileInfo);

router.get('/', getHomeData);
// http://localhost:3030/api/v1/provider/?name=صالح&location=1&service=1&subservice=1,2,3&page=1
router.get('/provider', getSearchResult);
router.get('/work/:providerId', getWorkPerPage);

router.post('/reviews', addReview);
module.exports = router;
