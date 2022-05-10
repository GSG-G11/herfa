const Joi = require('joi');

const workEditValidation = Joi.object({
  title: Joi.string().max(50).required(),
  content: Joi.string().required(),
  id: Joi.number().integer().positive().required(),
  workImg: Joi.object().keys({
    type: Joi.string().valid('image/jpeg', 'image/png').required(),
  }).unknown(),
  image: Joi.string(),
});

module.exports = workEditValidation;
