const Joi = require('joi');

const workValidation = Joi.object({
  title: Joi.string().max(50).required(),
  content: Joi.string().required(),
  id: Joi.number().integer().positive().required(),
  image: Joi.object().keys({
    type: Joi.string().valid('image/jpeg', 'image/png').required(),
  }).unknown().required(),
});

module.exports = workValidation;
