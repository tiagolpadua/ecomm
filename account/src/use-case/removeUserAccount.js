import { getAccounts, setAccounts } from './accounts.js';
import searchUserAccountByEmail from './searchUserAccountByEmail.js';

function removeUserUseCase (email) {
  let accounts = getAccounts();
  if (searchUserAccountByEmail(email)) {
    accounts = accounts.filter(acc => acc.email !== email);
    setAccounts(accounts);
    return 0;
  } else {
    return -1;
  }
}

export default removeUserUseCase;
