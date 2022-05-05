const Joi = require('joi');

const searchRequestValidation = Joi.object({
  name: Joi.string(),
  service: Joi.number(),
  location: Joi.number(),
  subservice: Joi.string(),
  page: Joi.number().positive(),
});

module.exports = searchRequestValidation;
