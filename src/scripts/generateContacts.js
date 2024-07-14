import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';
const generateContacts = async (number) => {
  const newUsers = [];
  for (let i = 0; i < number; i++) {
    newUsers.push(createFakeContact());
  }
  const contacts = JSON.parse(await fs.readFile(PATH_DB));
  fs.writeFile(PATH_DB, JSON.stringify([...contacts, ...newUsers]));
};

generateContacts(3);
