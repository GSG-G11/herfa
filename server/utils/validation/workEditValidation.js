const Joi = require('joi');

const workEditValidation = Joi.object({
  title: Joi.string().max(50).required(),
  content: Joi.string().required(),
  id: Joi.number().integer().positive().required(),
  image: Joi.object().keys({
    type: Joi.string().valid('image/jpeg', 'image/png').required(),
  }).unknown(),
});

module.exports = workEditValidation;
