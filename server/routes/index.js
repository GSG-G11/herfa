const router = require('express').Router();
const { profile } = require('../controllers/user');

router.get('/', async (req, res) => {
  res.json({ msg: 'hello' });
});
router.get('/providers/:id', profile);

module.exports = router;
