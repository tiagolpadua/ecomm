import createUserUseCase from '../../src/use-case/createUserAccount.js';
import getUserByUF from '../../src/use-case/getUserByUF.js';
import setUserAddress from '../../src/use-case/setUserAddress.js';

createUserUseCase('tiago0', 'tiagolpadua0@gmail.com', '123456');
setUserAddress('tiagolpadua0@gmail.com', 'rua 123', 10, 'rua nova', 'centro', '72115510', 'brasília', 'DF');

createUserUseCase('tiago1', 'tiagolpadua1@gmail.com', '123456');
setUserAddress('tiagolpadua1@gmail.com', 'rua 123', 10, 'rua nova', 'centro', '72115510', 'brasília', 'SP');

createUserUseCase('tiago2', 'tiagolpadua2@gmail.com', '123456');
setUserAddress('tiagolpadua2@gmail.com', 'rua 123', 10, 'rua nova', 'centro', '72115510', 'brasília', 'SP');

createUserUseCase('tiago3', 'tiagolpadua3@gmail.com', '123456');
setUserAddress('tiagolpadua3@gmail.com', 'rua 123', 10, 'rua nova', 'centro', '72115510', 'brasília', 'MG');

console.log(getUserByUF('SP'));
