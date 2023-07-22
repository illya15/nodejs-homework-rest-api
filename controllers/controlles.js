const contacts = require("../models/contacts");


const { HttpError } = require("../utils");
const {ctrlWrapper}  = require('../utils')


const listContacts = async (req, res) => {
 
    const result = await contacts.listContacts();
    res.json(result);
 
    
  };

const getContactById = async (req, res) => {
  
    const { id } = req.params;
    const result = await contacts.getContactById(id);
    if (!result) {
      throw HttpError(404, "not found");
    }
    res.json(result);
  
};

const addContact = async (req, res) => {
 
    const result = await contacts.addContact(req.body);
    res.status(201).json(result);
    
};

const removeContact = async (req, res) => {

    const { id } = req.params;
    const result = await contacts.removeContact(id);
    if (!result) {
      throw HttpError(404, "not found");
    }
    res.json({
      message: "contact deleted",
    });
 
};


const updateContact = async (req, res) => {
 
  const { id } = req.params;
  const result = await contacts.updateContact(id, req.body);
  const body = req.body;
  if (!result) {
    throw HttpError(404, "not found");
  }

  if (!body) {
     throw HttpError(400, "missing fields");
  
  }

  res.json(result);
};


module.exports = {
    listContacts: ctrlWrapper(listContacts ) ,
    getContactById :ctrlWrapper(getContactById),
    addContact :ctrlWrapper(addContact),
    removeContact :ctrlWrapper(removeContact),
    updateContact : ctrlWrapper(updateContact),
};