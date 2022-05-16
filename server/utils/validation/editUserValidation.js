const Joi = require('joi');

const editUserValidation = Joi.object({
  phone: Joi.string().required(),
  whatsapp: Joi.string().required(),
  locationId: Joi.number().required(),
  description: Joi.string(),
  mainServiceId: Joi.number(),
  subservice: Joi.array(),
});

module.exports = { editUserValidation };
