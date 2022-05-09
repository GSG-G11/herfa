const Joi = require('joi');

const workValidation = Joi.object({
  title: Joi.string().max(50).required(),
  content: Joi.string().required(),
  // image: Joi.string().dataUri().required(),
});

module.exports = workValidation;
