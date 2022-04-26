// this file to validate params.id attribute
const Joi = require('joi');

const workIdValidation = Joi.object({
  userId: Joi.number().integer().positive().required(),
  pageNum: Joi.number().integer().positive().required(),
});

module.exports = workIdValidation;
