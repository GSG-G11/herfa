const router = require('express').Router();
const { getProfileInfo } = require('../controllers/user');

router.get('/providers/:id', getProfileInfo);
const { getHomeData } = require('../controllers');

router.get('/', getHomeData);

module.exports = router;
