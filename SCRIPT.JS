document.addEventListener("DOMContentLoaded", () => {
  const userList = document.getElementById("user-list");

  const usuarios = [
    { nome: "Ana Silva", email: "ana.silva@email.com" },
    { nome: "Carlos Souza", email: "carlos.souza@email.com" },
    { nome: "Mariana Oliveira", email: "mariana.oliveira@email.com" },
    { nome: "Pedro Santos", email: "pedro.santos@email.com" },
    { nome: "Juliana Lima", email: "juliana.lima@email.com" },
    { nome: "Rafael Costa", email: "rafael.costa@email.com" },
    { nome: "Fernanda Rocha", email: "fernanda.rocha@email.com" },
    { nome: "Lucas Almeida", email: "lucas.almeida@email.com" },
    { nome: "Bianca Ramos", email: "bianca.ramos@email.com" },
    { nome: "Thiago Ferreira", email: "thiago.ferreira@email.com" }
  ];

  usuarios.forEach(usuario => {
    const card = document.createElement("div");
    card.className = "user-card";

    const nome = document.createElement("div");
    nome.className = "user-name";
    nome.textContent = usuario.nome;

    const email = document.createElement("div");
    email.className = "user-email";
    email.textContent = usuario.email;

    card.appendChild(nome);
    card.appendChild(email);

    userList.appendChild(card);
  });
});
