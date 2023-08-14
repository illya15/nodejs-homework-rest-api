const Joi = require("joi");

const emailUserValidator = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
  }),
 
});

module.exports = emailUserValidator;
