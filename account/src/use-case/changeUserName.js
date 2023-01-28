import { getAccounts, setAccounts } from './accounts.js';
import searchUserAccountByEmail from './searchUserAccountByEmail.js';

function changeUserNameUseCase (email, newName) {
  let accounts = getAccounts();
  const usuario = searchUserAccountByEmail(email);
  if (usuario) {
    accounts = accounts.map(acc => acc.email === usuario.email ? { ...usuario, nome: newName } : acc);
    setAccounts(accounts);
    return 0;
  } else {
    return -1;
  }
}

export default changeUserNameUseCase;
