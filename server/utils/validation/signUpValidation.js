const Joi = require('joi');

const signUpValidation = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(/^[a-zA-Z0-9]{8,30}$/),
  phone: Joi.string().required(),
  whatsapp: Joi.string().required(),
  locationId: Joi.number().required(),
  image: Joi.string().required(),
  description: Joi.string(),
  facebook_link: Joi.string().required(),
  instagram_link: Joi.string().required(),
  mainServiceId: Joi.number().required(),
});

module.exports = { signUpValidation };
