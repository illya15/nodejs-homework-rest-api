const express = require("express");

const{authenticate,validateBody} = require("../../middelware");

const {userValidator,userSubscriptionValidator} = require("../../shema")

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



module.exports = router;