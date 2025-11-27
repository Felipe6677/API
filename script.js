const API_DATA = [
    {
        name: "Felipe Almeida",
        email: "felipe.almeida@gmail.com",
        city: "São Paulo"
    },
    {
        name: "Ana Rodrigues",
        email: "ana.rodrigues@yahoo.com",
        city: "Rio de Janeiro"
    },
    {
        name: "Lucas Menezes",
        email: "lucas.menezes@hotmail.com",
        city: "Fortaleza"
    },
    {
        name: "Mariana Castro",
        email: "mariana.castro@gmail.com",
        city: "Belo Horizonte"
    },
    {
        name: "João Pedro Silva",
        email: "joao.pedro.silva@gmail.com",
        city: "Curitiba"
    },
    {
        name: "Carla Fernandes",
        email: "carla.fernandes@hotmail.com",
        city: "Recife"
    },
    {
        name: "Pedro Henrique Alves",
        email: "pedro.h.alves@gmail.com",
        city: "Salvador"
    },
    {
        name: "Beatriz Morais",
        email: "beatriz.morais@yahoo.com",
        city: "Porto Alegre"
    },
    {
        name: "Rafael Oliveira",
        email: "rafael.oliveira@gmail.com",
        city: "Manaus"
    },
    {
        name: "Juliana Santos",
        email: "juliana.santos@hotmail.com",
        city: "Brasília"
    },
    {
        name: "Eduardo Nascimento",
        email: "eduardo.nascimento@gmail.com",
        city: "Campinas"
    },
    {
        name: "Larissa Freitas",
        email: "larissa.freitas@yahoo.com",
        city: "Natal"
    },
    {
        name: "Thiago Cardoso",
        email: "thiago.cardoso@hotmail.com",
        city: "Belém"
    },
    {
        name: "Camila Ribeiro",
        email: "camila.ribeiro@gmail.com",
        city: "Florianópolis"
    },
    {
        name: "Gustavo Martins",
        email: "gustavo.martins@gmail.com",
        city: "Goiânia"
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