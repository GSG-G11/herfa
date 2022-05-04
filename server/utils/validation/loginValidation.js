const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{8,30}$/),
});

const loginValidation = (body) => schema.validateAsync(body);
module.exports = loginValidation;
