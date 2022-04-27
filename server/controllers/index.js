const { getHomeData } = require('./home');
const { getWorkPerPage } = require('./work');
const { getProfileInfo, addReview } = require('./user');

module.exports = {
  getHomeData, getWorkPerPage, getProfileInfo, addReview,
};
