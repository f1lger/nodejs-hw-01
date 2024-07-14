import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const countContacts = async () => {
  return JSON.parse(await fs.readFile(PATH_DB)).length;
};

console.log(await countContacts());
