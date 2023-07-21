const express = require('express')



const contrl= require('../../controllers/controlles')

const { schemaContactValidator } = require("../../shema")

const { validateBody } = require("../../middelware");

const router = express.Router();




router.get("/",contrl.listContacts);

router.get("/:id", contrl.getContactById);

router.post('/', validateBody(schemaContactValidator), contrl.addContact)

router.delete('/:id', contrl.removeContact)

router.put('/:id',validateBody(schemaContactValidator), contrl.updateContact)

module.exports = router
