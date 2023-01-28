import { getAccounts } from './accounts.js';

function getUserByUF (uf) {
  return getAccounts().filter(acc => acc.endereco?.uf === uf);
};

export default getUserByUF;
