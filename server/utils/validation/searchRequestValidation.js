const Joi = require('joi');

const searchRequestValidation = Joi.object({
  name: Joi.string(),
  service: Joi.number(),
  location: Joi.number(),
  subservice: Joi.array().items(Joi.number()),
  page: Joi.number().positive(),
});

module.exports = searchRequestValidation;
