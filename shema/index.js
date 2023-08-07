const schemaContactValidator = require("./validateSchemaContact");

const contactFavoriteValidator = require('./contactFavoriteValidator');

const userValidator =require ('./userSchema');

const userSubscriptionValidator = require('./userSubscriptionValidator')

module.exports = { schemaContactValidator,
contactFavoriteValidator,
userValidator, 
userSubscriptionValidator
};
