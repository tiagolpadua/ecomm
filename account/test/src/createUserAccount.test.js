import createUserUseCase from '../../src/use-case/createUserAccount.js';

const user = createUserUseCase('tiago', 'tiagolpadua@gmail.com', '123456');

console.log(user);
