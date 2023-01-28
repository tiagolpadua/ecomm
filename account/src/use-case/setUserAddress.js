import { getAccounts, setAccounts } from './accounts.js';
import searchUserAccountByEmail from './searchUserAccountByEmail.js';

function setUserAddress (email, logradouro, numero, complemento, bairro, cep, cidade, uf) {
  const usuario = searchUserAccountByEmail(email);
  if (usuario) {
    setAccounts(getAccounts().map(acc => acc.email === email ? { ...acc, endereco: { logradouro, numero, complemento, bairro, cep, cidade, uf } } : acc));
  } else {
    return -1;
  }
};

export default setUserAddress;
