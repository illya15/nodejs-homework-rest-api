const { Contact } = require("../models/contactsModels");

const listContacts = async (fieldsForQuery, options) => {
  // Повертає масив контактів
  return await Contact.find({ ...fieldsForQuery }, "", { ...options });
};

const addContact = async (data) => {
  // Повертає об'єкт доданого контакту.
  return await Contact.create(data);
};

module.exports = {
  listContacts,
  addContact,
}