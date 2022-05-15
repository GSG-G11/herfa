const Joi = require('joi');

const imageValidation = Joi.object({
  id: Joi.number().integer().positive().required(),
  profileImg: Joi.object().keys({
    type: Joi.string().valid('image/jpeg', 'image/png').required(),
  }).unknown().required(),
});

module.exports = { imageValidation };
