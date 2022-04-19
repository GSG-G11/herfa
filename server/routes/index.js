const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('HELLO');
});

module.exports = router;
