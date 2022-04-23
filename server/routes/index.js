const router = require('express').Router();
const { getHomeData } = require('../controllers');

router.get('/', async (req, res) => {
  res.json({ msg: 'hello' });
});

router.get('/home', getHomeData);

module.exports = router;
