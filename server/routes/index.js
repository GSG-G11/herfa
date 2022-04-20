const router = require('express').Router();
const { Location } = require('../database/models');

const location1 = {
  city: 'gaza',
};
router.get('/', async (req, res) => {
  const location = await Location.create(location1);
  res.json(location);
});

module.exports = router;
