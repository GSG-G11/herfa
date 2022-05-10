const Joi = require('joi');

const workEditValidation = Joi.object({
  id: Joi.number().integer().positive().required(),
  title: Joi.string().min(3).max(30).required(),
  content: Joi.string().min(3).max(30).required(),
});

module.exports = workEditValidation;
