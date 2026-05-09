const usuarios = [
  {
    id: 1,
    nome: "Will",
    email: "will@email.com",
    senha: "123456",
    expirado: false
  },
  {
    id: 2,
    nome: "Ana",
    email: "ana@email.com",
    senha: "abc123",
    expirado: true
  }
];

function fazerLogin(email, senha) {
  const usuario = usuarios.find(u => u.email === email);

  if (!usuario) {
    return "Usuário não encontrado";
  }

  if (usuario.senha !== senha) {
    return "Senha incorreta";
  }

  if (usuario.expirado === true) {
    return "Renove suas credenciais";
  }

  return "Login realizado com sucesso";
}