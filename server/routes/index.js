const router = require('express').Router();

const {
  getHomeData, getWorkPerPage, getProfileInfo, addReview, subServices,
} = require('../controllers');

router.get('/providers/:id', getProfileInfo);

router.get('/', getHomeData);
router.get('/work/:providerId', getWorkPerPage);
router.get('/subservices/:mainServiceId', subServices);

router.post('/reviews', addReview);
module.exports = router;
