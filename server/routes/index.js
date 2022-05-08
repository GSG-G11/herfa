const router = require('express').Router();

const {
  getHomeData, getWorkPerPage, getProfileInfo, addReview, subServices,
} = require('../controllers');
const { uploadImage } = require('../utils');

router.get('/providers/:id', getProfileInfo);

router.get('/', getHomeData);
router.get('/work/:providerId', getWorkPerPage);
router.get('/subservices/:mainServiceId', subServices);

router.post('/reviews', addReview);
// example how to upload image using S3
router.post('/img', async (req, res) => {
  console.log(req.files);
  const data = await uploadImage(req.files.avatare);
  console.log(data);
  res.json({ data });
});
module.exports = router;
