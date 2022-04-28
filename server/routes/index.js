const router = require('express').Router();
const { getProfileInfo, addReview, getSearchResult } = require('../controllers/user');

router.get('/providers/:id', getProfileInfo);
const { getHomeData } = require('../controllers');

router.get('/', getHomeData);
router.get('/provider', getSearchResult);
router.post('/reviews', addReview);
module.exports = router;
