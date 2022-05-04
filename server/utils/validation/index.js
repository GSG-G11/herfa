const paramsValidation = require('./requestParamsValidation');
const workIdValidation = require('./workIdValidation');
const reviewValidation = require('./reviewValidation');
const mainServiceIdValidation = require('./mainServiceIdValidation');
const loginValidation = require('./loginValidation');

module.exports = {
  paramsValidation,
  reviewValidation,
  workIdValidation,
  mainServiceIdValidation,
  loginValidation,
};
