const paramsValidation = require('./requestParamsValidation');
const workIdValidation = require('./workIdValidation');
const reviewValidation = require('./reviewValidation');
const searchRequestValidation = require('./searchRequestValidation');
const mainServiceIdValidation = require('./mainServiceIdValidation');

module.exports = {
  paramsValidation,
  reviewValidation,
  searchRequestValidation,
  workIdValidation,
  mainServiceIdValidation,
};
