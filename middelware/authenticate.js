const jwt = require("jsonwebtoken");
require("dotenv").config();

const { HttpError } = require("../utils");
const { User } = require("../models/user");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    next(HttpError(401, "Not authorized"));
  }
  // Перевірка на валідність токена та існування користувача токена
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      next(HttpError(401, "Not authorized"));
    }
    req.user = user;

    next();
  } catch {
    next(HttpError(401, "Not authorized"));
  }
};

module.exports = authenticate;
