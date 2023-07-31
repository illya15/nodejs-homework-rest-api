const Joi = require("joi");

const contactFavoriteValidator = Joi.object({
  favorite: Joi.boolean().required().messages({
    "any.required": "missing field favorite",
  }),
});

module.exports = contactFavoriteValidator

 