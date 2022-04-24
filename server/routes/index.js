const router = require('express').Router();
const { profile } = require('../controllers/user');

router.get('/providers/:id', profile);
const { getHomeData } = require('../controllers');

router.get('/', getHomeData);

module.exports = router;
