import { getAccounts } from '../../src/use-case/accounts.js';
import createUserUseCase from '../../src/use-case/createUserAccount.js';
import setUserAddress from '../../src/use-case/setUserAddress.js';

createUserUseCase('tiago', 'tiagolpadua@gmail.com', '123456');

setUserAddress('tiagolpadua@gmail.com', 'rua 123', 10, 'rua nova', 'centro', '72115510', 'brasília', 'df');

console.log(getAccounts());
