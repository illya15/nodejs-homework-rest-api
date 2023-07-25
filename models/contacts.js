 const fs = require('fs/promises');


const path = require("path");
const { nanoid } = require("nanoid");

// const contactsPath = require("./contacts.json");

const listContacts = async () => {
   const pathToFile = path.join("models","contacts.json");

  const readContacts = await fs.readFile(pathToFile);
  return JSON.parse(readContacts);
};

const getContactById = async (id) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === id);

  return result || null;
};

const removeContact = async (id) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, 1);

  const pathToFile = path.join("models", "contacts.json");
  await fs.writeFile(pathToFile, JSON.stringify(contacts, null, 2));

  return result;
};


const addContact = async (data) => {
  const contacts = await listContacts();

  const newContact = {
    id: nanoid(),
    ...data,
  };

  contacts.push(newContact);
  const pathToFile = path.join("models", "contacts.json");
  await fs.writeFile(pathToFile, JSON.stringify(contacts, null, 2));
  return newContact;
};

 const updateContact = async (id, body) => {
   const contacts = await listContacts();
   const index = contacts.findIndex((item) => item.id === id);
     if (index === -1) {
       return null;
     }
     contacts[index] = {id,...body};
     const pathToFile = path.join("models","contacts.json");
 await fs.writeFile(pathToFile, JSON.stringify(contacts, null, 2));
return contacts[index]
 };

module.exports = {

  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
};









