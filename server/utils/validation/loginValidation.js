const Joi = require('joi');

const schema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
});

const loginValidaion = (body) => schema.validateAsync(body);
module.exports = loginValidaion;
