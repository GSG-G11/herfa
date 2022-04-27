const router = require('express').Router();
const { getProfileInfo, addReview } = require('../controllers/user');

const { getHomeData, getWorkPerPage } = require('../controllers');

router.get('/providers/:id', getProfileInfo);

router.get('/', getHomeData);
router.get('/work/:providerId', getWorkPerPage);

router.post('/reviews', addReview);
module.exports = router;
