const Joi = require('joi');

const editUserValidation = Joi.object({
  id: Joi.number().integer().positive().required(),
  phone: Joi.string().required(),
  whatsapp: Joi.string().required(),
  locationId: Joi.number().required(),
  description: Joi.string(),
  mainServiceId: Joi.number().required(),
  subservice: Joi.array(),
});

module.exports = { editUserValidation };
