const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const loginValidation = (body) => schema.validateAsync(body);
module.exports = loginValidation;
