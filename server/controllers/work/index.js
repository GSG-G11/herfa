const { getWorkPerPage } = require('./workPerPage');
const { deleteWork } = require('./deleteWork');
const addWork = require('./addWork');
const { editWork } = require('./editWork');

module.exports = {
  getWorkPerPage, editWork, deleteWork, addWork,
};
