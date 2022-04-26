const Joi = require('joi');

const reviewValidation = Joi.object({
  rate: Joi.number().positive().required(),
  content: Joi.string().min(1).max(500).required(),
  userId: Joi.number().positive().required(),
  phone: Joi.string().required(),
});

module.exports = reviewValidation;
