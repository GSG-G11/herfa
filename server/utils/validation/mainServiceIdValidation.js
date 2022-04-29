const Joi = require('joi');

const mainServiceIdValidation = Joi.object({
  id: Joi.number().integer().positive().required(),
});

module.exports = mainServiceIdValidation;
