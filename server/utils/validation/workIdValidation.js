// this file to validate params.id attribute
const Joi = require('joi');

const workIdValidation = Joi.object({
  id: Joi.number().integer().positive().required(),
});

module.exports = workIdValidation;
