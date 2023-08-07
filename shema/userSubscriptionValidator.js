const Joi = require("joi");

const STATUS_SUBSCRIPTION = {
  STARTER: "starter",
  PRO: "pro",
  BUSINESS: "business",
};

const userSubscriptionValidator = Joi.object({
  subscription: Joi.valid(...Object.values(STATUS_SUBSCRIPTION)).required(),
});

module.exports=userSubscriptionValidator;