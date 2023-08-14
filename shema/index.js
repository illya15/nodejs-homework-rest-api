const schemaContactValidator = require("./validateSchemaContact");

const contactFavoriteValidator = require('./contactFavoriteValidator');

const userValidator =require ('./userSchema');

const userSubscriptionValidator = require('./userSubscriptionValidator');

const emailUserValidator = require('./emailUserValidator')


module.exports = {
  schemaContactValidator,
  contactFavoriteValidator,
  userValidator,
  userSubscriptionValidator,
  emailUserValidator
 
  
 
};
