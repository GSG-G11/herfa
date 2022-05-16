const Joi = require('joi');

const phoneValidation = Joi.object({
  phone: Joi.string().required(),
});

module.exports = { phoneValidation };
