const router = require('express').Router();
const { getProfileInfo } = require('../controllers/user');

router.get('/providers/:id', getProfileInfo);
const { getHomeData, getPageData } = require('../controllers');

router.get('/', getHomeData);
router.get('/work/:providerId', getPageData);

module.exports = router;
