import { getAccounts } from './accounts.js';

function searchUserAccountByEmail (email) {
  return getAccounts().find(acc => acc.email === email);
}

export default searchUserAccountByEmail;
