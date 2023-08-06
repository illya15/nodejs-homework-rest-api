const Joi = require("joi");

const userValidator = Joi.object({
  email: Joi.string().required().messages({
    "any.required": "missing required email field",
  }),
  password: Joi.string().min(3).required().messages({
    "any.required": " missing required password field",
  }),
});

module.exports = userValidator;
