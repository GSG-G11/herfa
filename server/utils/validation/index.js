const paramsValidation = require('./requestParamsValidation');
const workIdValidation = require('./workIdValidation');
const reviewValidation = require('./reviewValidation');
const mainServiceIdValidation = require('./mainServiceIdValidation');

module.exports = {
  paramsValidation,
  reviewValidation,
  workIdValidation,
  mainServiceIdValidation,
};
