const router = require('express').Router();
const { getHomeData } = require('../controllers');

router.get('/', getHomeData);

module.exports = router;
