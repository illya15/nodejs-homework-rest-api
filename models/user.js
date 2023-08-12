const { Schema, model } = require("mongoose");
// const Joi = require("joi");

const STATUS_SUBSCRIPTION = {
  STARTER: "starter",
  PRO: "pro",
  BUSINESS: "business",
};


const userSchemaValidator = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    subscription: {
      type: String,
      enum: [
        STATUS_SUBSCRIPTION.STARTER,
        STATUS_SUBSCRIPTION.PRO,
        STATUS_SUBSCRIPTION.BUSINESS,
      ],
      default: STATUS_SUBSCRIPTION.STARTER,
    },
    avatarURL: String,
    token: { type: String, default: "" },

    verify: {
      type: Boolean,
      default: false,
    },

    verificationToken: {
      type: String,
      required: [true, "Verify token is required"],
    },
  },
  { versionKey: false }
);

userSchemaValidator.post("save", (error, data, next) => {
  
  error.status = 400;
  next();
});

const User = model("user", userSchemaValidator);

// const userValidator = Joi.object({
//   email: Joi.string().required().messages({
//     "any.required": "missing required email field",
//   }),
//   password: Joi.string().min(3).required().messages({
//     "any.required": " missing required password field",
//   }),
// });


// const userSubscriptionValidator = Joi.object({
//   subscription: Joi.valid(...Object.values(STATUS_SUBSCRIPTION)).required(),
// });


// const schemas = { userValidator, userSubscriptionValidator, };

module.exports = { User };