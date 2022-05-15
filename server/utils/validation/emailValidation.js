const Joi = require('joi');

const emailValidation = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = { emailValidation };
