let carrinho = [];
let total = 0;

function adicionar(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function remover(index) {
    total -= carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.getElementById("lista");
    const totalElemento = document.getElementById("total");

    lista.innerHTML = "";

    carrinho.forEach((item, index) => {
        lista.innerHTML += `
            <li>
                ${item.nome} - R$ ${item.preco}
                <button onclick="remover(${index})">❌</button>
            </li>
        `;
    });

    totalElemento.textContent = total;
}

function finalizar() {
    let mensagem = "Olá, gostaria de pedir:%0A";

    carrinho.forEach(item => {
        mensagem += `- ${item.nome} (R$ ${item.preco})%0A`;
    });

    mensagem += `%0ATotal: R$ ${total}`;

    const telefone = "55082993021475"; // COLOCA SEU NÚMERO AQUI
    window.open(`https://wa.me/${telefone}?text=${mensagem}`);
}
