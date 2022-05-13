const Joi = require('joi');

const signUpValidation = Joi.object({
  // first_name: Joi.string().required(),
  // last_name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  // password: Joi.string().max(50).min(3).required(),
});

module.exports = signUpValidation;
