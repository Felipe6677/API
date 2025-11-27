const API_DATA = [
    {
        nome: "Felipe Almeida",
        email: "felipe.almeida@gmail.com",
        cidade: "São Paulo"
    },
    {
        nome: "Ana Rodrigues",
        email: "ana.rodrigues@yahoo.com",
        cidade: "Rio de Janeiro"
    },
    {
        nome: "Lucas Menezes",
        email: "lucas.menezes@hotmail.com",
        cidade: "Fortaleza"
    },
    {
        nome: "Mariana Castro",
        email: "mariana.castro@gmail.com",
        cidade: "Belo Horizonte"
    },
    {
        nome: "João Pedro Silva",
        email: "joao.pedro.silva@gmail.com",
        cidade: "Curitiba"
    },
    {
        nome: "Carla Fernandes",
        email: "carla.fernandes@hotmail.com",
        cidade: "Recife"
    },
    {
        nome: "Pedro Henrique Alves",
        email: "pedro.h.alves@gmail.com",
        cidade: "Salvador"
    },
    {
        nome: "Beatriz Morais",
        email: "beatriz.morais@yahoo.com",
        cidade: "Porto Alegre"
    },
    {
        nome: "Rafael Oliveira",
        email: "rafael.oliveira@gmail.com",
        cidade: "Manaus"
    },
    {
        nome: "Juliana Santos",
        email: "juliana.santos@hotmail.com",
        cidade: "Brasília"
    },
    {
        nome: "Eduardo Nascimento",
        email: "eduardo.nascimento@gmail.com",
        cidade: "Campinas"
    },
    {
        nome: "Larissa Freitas",
        email: "larissa.freitas@yahoo.com",
        cidade: "Natal"
    },
    {
        nome: "Thiago Cardoso",
        email: "thiago.cardoso@hotmail.com",
        cidade: "Belém"
    },
    {
        nome: "Camila Ribeiro",
        email: "camila.ribeiro@gmail.com",
        cidade: "Florianópolis"
    },
    {
        nome: "Gustavo Martins",
        email: "gustavo.martins@gmail.com",
        cidade: "Goiânia"
    }
];

const btn = document.getElementById("btnCarregar");
const container = document.getElementById("usersContainer");

async function carregarUsuarios() {
    container.innerHTML = "<p>Carregando...</p>";

    await new Promise(res => setTimeout(res, 800));

    renderizarUsuarios(API_DATA);
}

function renderizarUsuarios(usuarios) {
    container.innerHTML = "";

    usuarios.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Cidade:</strong> ${user.city}</p>
        `;

        container.appendChild(card);
    });
}

btn.addEventListener("click", carregarUsuarios);