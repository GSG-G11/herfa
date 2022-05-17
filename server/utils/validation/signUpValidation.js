const Joi = require('joi');

const signUpValidation = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/),
  phone: Joi.string().required(),
  whatsapp: Joi.string().required(),
  locationId: Joi.number().required(),
  description: Joi.string(),
  facebook_link: Joi.string(),
  instagram_link: Joi.string(),
  mainServiceId: Joi.number().required(),
  subservice: Joi.array(),
  confirm: Joi.string().required().valid(Joi.ref('password')),
});

module.exports = { signUpValidation };
