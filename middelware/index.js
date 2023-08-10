const validateBody = require("./validateBody");
const haveBody = require("./body");
const isValidId = require("./isValidId");
const authenticate = require('./authenticate')
const uploadAvatar = require('./upload')

module.exports = { validateBody, haveBody, isValidId, authenticate, uploadAvatar };
