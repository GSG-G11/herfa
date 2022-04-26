const router = require('express').Router();
const { getProfileInfo, addReview } = require('../controllers/user');

router.get('/providers/:id', getProfileInfo);
const { getHomeData, getPageData } = require('../controllers');

router.get('/', getHomeData);
router.get('/work/:providerId', getPageData);

router.post('/reviews', addReview);
module.exports = router;
