const express = require("express");

const{authenticate,validateBody, uploadAvatar} = require("../../middelware");

const {userValidator,userSubscriptionValidator, emailUserValidator} = require("../../shema")

// const schemas = require('../../models/user');

const ctrl = require('../../controllers/auth');

const router = express.Router();

 router.post("/register", validateBody(userValidator), ctrl.register);

 router.post("/login", validateBody(userValidator), ctrl.logIn);

 router.post("/logout", authenticate, ctrl.logOut);

 router.get("/current", authenticate, ctrl.currentUser);

 router.patch(
   "/subscription",
   authenticate,
   validateBody(userSubscriptionValidator),
   ctrl.updateUserSubscription
 );

 router.patch("/avatars", authenticate,uploadAvatar.single('avatar'),ctrl.updateAvatar);

 router.get("/verify/:verificationToken", ctrl.verifyToken);

 router.post("/verify", validateBody(emailUserValidator), ctrl.resendEmail);

module.exports = router;