import changeUserNameUseCase from '../../src/use-case/changeUserName.js';
import createUserUseCase from '../../src/use-case/createUserAccount.js';
import searchUserAccountByEmail from '../../src/use-case/searchUserAccountByEmail.js';

createUserUseCase('tiago', 'tiagolpadua@gmail.com', '123456');
createUserUseCase('bar', 'bar@gmail.com', '5545454');

console.log(searchUserAccountByEmail('tiagolpadua@gmail.com'));

changeUserNameUseCase('tiagolpadua@gmail.com', 'payne');

console.log(searchUserAccountByEmail('tiagolpadua@gmail.com'));
