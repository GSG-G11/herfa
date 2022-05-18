const Joi = require('joi');

const imageValidation = Joi.object({
  id: Joi.number().integer().positive().required(),
  profileImg: Joi.object().keys({
    name: Joi.string().required(),
  }).unknown().required(),
});

module.exports = { imageValidation };
