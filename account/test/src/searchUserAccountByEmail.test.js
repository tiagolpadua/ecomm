import createUserUseCase from './createUserAccount.js';
import searchUserAccountByEmail from './searchUserAccountByEmail.js';

createUserUseCase('tiago', 'tiagolpadua@gmail.com', '123456');

console.log(searchUserAccountByEmail('tiagolpadua@gmail.com'));

// eslint-disable-next-line semi
console.log(searchUserAccountByEmail('foo@gmail.com'));
