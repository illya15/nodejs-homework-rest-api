const express = require("express");

// username mongoDB ilyshasid84

// Password mongoDB  Sidor12345

const contrl = require("../../controllers/controlles");

const { schemaContactValidator, contactFavoriteValidator } = require("../../shema");

const { authenticate, validateBody, haveBody, isValidId } = require("../../middelware");

const router = express.Router();

 router.use(authenticate);

router.get("/", contrl.getContacts);

router.get("/:id", isValidId, contrl.getContactById);

router.post("/", validateBody(schemaContactValidator), contrl.postContact);

 router.delete('/:id',isValidId, contrl.removeContact)

router.put(  "/:id",  isValidId,  haveBody,  validateBody(schemaContactValidator),  contrl.updateContact);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(contactFavoriteValidator),
  contrl.updateFavorite
);
module.exports = router;
