import { getAccounts, setAccounts } from './accounts.js';

function createUserUseCase (nome, email, senha) {
  const user = {
    nome,
    email,
    senha
  };

  user.createdDate = getCurrentYMD();
  const accounts = getAccounts();
  user.id = accounts.length + 1;

  accounts.push(user);

  setAccounts(accounts);

  return user;
};

function getCurrentYMD () {
  return new Date().toISOString().substring(0, 10);
}

export default createUserUseCase;
