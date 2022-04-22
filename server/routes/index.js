const router = require('express').Router();
const { Home } = require('../controllers');

router.get('/', async (req, res) => {
  res.json({ msg: 'hello' });
});

router.get('/home', Home);

module.exports = router;
