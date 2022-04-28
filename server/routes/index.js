const router = require('express').Router();
const {
  getProfileInfo, addReview, getSearchResult, getWorkPerPage, getHomeData,
} = require('../controllers');

router.get('/providers/:id', getProfileInfo);

router.get('/', getHomeData);
router.get('/provider', getSearchResult);
router.get('/work/:providerId', getWorkPerPage);

router.post('/reviews', addReview);
module.exports = router;
