const paramsValidation = require('./requestParamsValidation');
const workIdValidation = require('./workIdValidation');
const reviewValidation = require('./reviewValidation');
const searchRequestValidation = require('./searchRequestValidation');
const mainServiceIdValidation = require('./mainServiceIdValidation');
const loginValidation = require('./loginValidation');
const workValidation = require('./workValidation');
const workEditValidation = require('./workEditValidation');
const signUpValidation = require('./signUpValidation');

module.exports = {
  paramsValidation,
  reviewValidation,
  searchRequestValidation,
  workIdValidation,
  mainServiceIdValidation,
  loginValidation,
  workValidation,
  workEditValidation,
  signUpValidation,
};
