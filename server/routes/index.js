const router = require('express').Router();
const { getProfileInfo, addReview } = require('../controllers/user');

router.get('/providers/:id', getProfileInfo);
const { getHomeData } = require('../controllers');

router.get('/', getHomeData);
router.post('/reviews', addReview);
module.exports = router;
