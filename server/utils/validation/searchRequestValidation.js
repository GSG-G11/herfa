const Joi = require('joi');

const searchRequestValidation = Joi.object({
  name: Joi.string(),
  service: Joi.string(),
  location: Joi.number(),
  subservice: Joi.string(),
  page: Joi.number().positive(),
});

module.exports = searchRequestValidation;
