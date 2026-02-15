let carrinho = [];
let total = 0;

function addCarrinho(nome, preco){
  carrinho.push({nome,preco});
  total += preco;
  atualizar();
}

function atualizar(){
  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  carrinho.forEach(item=>{
    let li = document.createElement("li");
    li.textContent = item.nome + " - R$ " + item.preco;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = 
  "Total: R$ " + total;
}

function enviarWhats(){
  let texto = "Pedido Massas:%0A";

  carrinho.forEach(item=>{
    texto += item.nome + " - R$" + item.preco + "%0A";
  });

  texto += "%0ATotal: R$" + total;

  let numero = "5582999999999"; // coloque seu número

  window.open(`https://wa.me/${numero}?text=${texto}`);
}
