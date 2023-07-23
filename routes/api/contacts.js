const express = require('express')



const contrl= require('../../controllers/controlles')

const { schemaContactValidator } = require("../../shema")

const { validateBody , haveBody } = require("../../middelware");

const router = express.Router();




router.get("/",contrl.listContacts);

router.get("/:id", contrl.getContactById);

router.post('/', validateBody(schemaContactValidator), contrl.addContact)

router.delete('/:id', contrl.removeContact)

router.put('/:id', haveBody, validateBody(schemaContactValidator), contrl.updateContact)

module.exports = router
