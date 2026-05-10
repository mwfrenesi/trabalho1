const usuarios = [
  {
    id: 1,
    nome: "Will",
    email: "will@email.com",
    senha: "820275",
    expirado: false
  },
  {
    id: 2,
    nome: "Andre",
    email: "andre@email.com",
    senha: "723AC",
    expirado: true
  }
];

function fazerLogin(email, senha) {

  // procura usuário pelo email
  const usuarioEncontrado = usuarios.find(
    usuario => usuario.email === email
  );

  // usuário não encontrado
  if (!usuarioEncontrado) {
    return "Usuário não encontrado";
  }

  // senha incorreta
  if (usuarioEncontrado.senha !== senha) {
    return "Senha incorreta";
  }

  // credencial expirada
  if (usuarioEncontrado.expirado === true) {
    return "Renove suas credenciais";
  }

  // sucesso
  return "Login realizado com sucesso";
}

// TESTES

console.log("Teste 1:");
console.log(fazerLogin("will@email.com", "820275"));

console.log("----------------");

console.log("Teste 2:");
console.log(fazerLogin("andre@email.com", "723AC"));

console.log("----------------");

console.log("Teste 3:");
console.log(fazerLogin("email-diferente@email.com", "7523"));

console.log("----------------");

console.log("Teste 4:");
console.log(fazerLogin("will@email.com", "999999"));
