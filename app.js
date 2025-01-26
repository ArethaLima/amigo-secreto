
let listaDeAmigos = [];

// Função para adicionar nome a lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nome = inputAmigo.value.trim();

    if (!nome) {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Verifica se o nome já existe na lista
    if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já está na lista.");
        return;
    }

    listaDeAmigos.push(nome);
    atualizarLista();

    // Limpa o campo de texto
    inputAmigo.value = "";
}

// Função para atualizar e exibir a lista
function atualizarLista() {
    const listaAmigosElement = document.getElementById("listaAmigos");

    // Limpa a lista antes de atualizá-la
    listaAmigosElement.innerHTML = ""; 

    listaDeAmigos.forEach((amigo, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = amigo;

        // Opcional: Adicionar botão para remover o nome
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "Remover";
        botaoRemover.className = "button-remove";
        botaoRemover.onclick = () => removerAmigo(index);

        listItem.appendChild(botaoRemover);
        listaAmigosElement.appendChild(listItem);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {

    // Remove o nome da lista
    listaDeAmigos.splice(index, 1); 
    atualizarLista();
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("A lista está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li class="result-item">Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}
