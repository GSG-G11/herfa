const addReview = require('./addReview');
const getProfileInfo = require('./profile');
const getSearchResult = require('./search');
const { uploadImageController } = require('./uploadImage');

module.exports = {
  getProfileInfo, addReview, getSearchResult, uploadImageController,
};
