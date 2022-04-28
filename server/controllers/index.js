const { getHomeData } = require('./home');
const { getWorkPerPage } = require('./work');
const { getProfileInfo, addReview, getSearchResult } = require('./user');

module.exports = {
  getHomeData, getWorkPerPage, getProfileInfo, addReview, getSearchResult,
};
