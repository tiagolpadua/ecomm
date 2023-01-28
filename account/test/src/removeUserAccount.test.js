import createUserUseCase from '../../src/use-case/createUserAccount.js';
import removeUserUseCase from '../../src/use-case/removeUserAccount.js';
import searchUserAccountByEmail from '../../src/use-case/searchUserAccountByEmail.js';

createUserUseCase('tiago', 'tiagolpadua@gmail.com', '123456');
createUserUseCase('bar', 'bar@gmail.com', '5545454');

console.log('antes');
console.log(searchUserAccountByEmail('tiagolpadua@gmail.com'));

console.log(removeUserUseCase('tiagolpadua@gmail.com'));

console.log(removeUserUseCase('notfound'));

console.log(removeUserUseCase('tiagolpadua@gmail.com'));

console.log('depois');
console.log(searchUserAccountByEmail('tiagolpadua@gmail.com'));
