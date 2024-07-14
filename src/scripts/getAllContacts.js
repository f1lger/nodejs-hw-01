import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const getAllContacts = async () => {
  return JSON.parse(await fs.readFile(PATH_DB));
};

console.log(await getAllContacts());
