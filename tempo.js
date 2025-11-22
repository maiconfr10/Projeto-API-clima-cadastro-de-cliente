
const apiKey = "3c435471bbe14aab83e183702252211";

// Buscar endereço pelo CEP
const cepInput = document.getElementById("cep");
cepInput.addEventListener("blur", async () => {
    const cep = cepInput.value.replace(/\D/g, "");
    if (cep.length !== 8) return;

    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    document.getElementById("logradouro").value = dados.logradouro || "";
    document.getElementById("bairro").value = dados.bairro || "";
    document.getElementById("cidade").value = dados.localidade || "";
    document.getElementById("estado").value = dados.uf || "";
});


const form = document.getElementById("formCliente");
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const cliente = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        cep: document.getElementById("cep").value,
        logradouro: document.getElementById("logradouro").value,
        bairro: document.getElementById("bairro").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value,
    };

    localStorage.setItem("cliente", JSON.stringify(cliente));

    
    alert("Cliente salvo com sucesso!");

    mostrarClima(cliente.cidade);
});

// Função clima
async function mostrarClima(cidade) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cidade}&lang=pt`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    const temp = dados.current.temp_c;
    const horario = dados.location.localtime;

    let cor = "";
    if (temp < 15) cor = "blue";
    else if (temp <= 30) cor = "green";
    else cor = "red";

    const card = document.getElementById("clima");
    card.style.display = "block";
    card.innerHTML = `
        <h2>Clima em ${cidade}</h2>
        <p class="temp" style="color:${cor}">${temp}°C</p>
        <p>Hora local: ${horario}</p>
    `;
}
