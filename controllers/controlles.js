
const { Contact } = require("../models/contactsModels");

const { HttpError } = require("../utils");
const {ctrlWrapper}  = require('../utils');
const{contactsHandlers} = require('../utils')


    
const getContacts = async (req, res) => {
  // Поля фільрації даних для запиту
  const { _id: owner } = req.user;
  const { favorite } = req.query;
  const fieldsForFilter = favorite ? { owner, favorite } : { owner };

  // Пагінація
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;
  const options = page ? { skip, limit } : {};

  const result = await contactsHandlers.listContacts(fieldsForFilter, options);
  res.json(result);
};

const getContactById = async (req, res) => {
  
    const { id } = req.params;
    const result = await Contact.findById(id);
    if (!result) {
      throw HttpError(404, "not found");
    }
    res.json(result);
  
};

const postContact = async (req, res) => {
  const { _id: owner } = req.user;
  const contact = await contactsHandlers.addContact({ ...req.body, owner });
  res.status(201).json(contact);
};

// const addContact = async (req, res) => {
 
//     const result = await Contact.create(req.body);
//     res.status(201).json(result);
    
// };

const removeContact = async (req, res) => {

    const { id } = req.params;
    const result = await Contact.findByIdAndRemove(id);
    if (!result) {
      throw HttpError(404, "not found");
    }
    res.json({
      message: "contact deleted",
    });
 
};


const updateContact = async (req, res) => {
 
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, "not found");
  }

  res.json(result);
};

const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) {
    throw HttpError(404, "not found");
  }

  res.json(result);
};


module.exports = {
  getContacts: ctrlWrapper(getContacts),
  getContactById: ctrlWrapper(getContactById),
  postContact: ctrlWrapper(postContact),
  removeContact :ctrlWrapper(removeContact),
  updateContact: ctrlWrapper(updateContact),
  updateFavorite: ctrlWrapper(updateFavorite),
};