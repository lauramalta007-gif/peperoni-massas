let produtos = [
  {nome:"Lasanha Bolonhesa", preco:25},
  {nome:"Lasanha Frango", preco:23},
  {nome:"Macarrão", preco:20}
];

let carrinho = [];

function carregar(){
  let menu = document.getElementById("menu");
  menu.innerHTML="";

  produtos.forEach(p=>{
    menu.innerHTML += `
      <div class="item">
        <div>
          <div class="nome">${p.nome}</div>
          <div class="preco">R$ ${p.preco}</div>
        </div>
        <button class="add" onclick="add('${p.nome}',${p.preco})">
          adicionar
        </button>
      </div>
    `;
  });
}

function add(nome,preco){
  carrinho.push({nome,preco});
  atualizar();
}

function remover(i){
  carrinho.splice(i,1);
  atualizar();
}

function atualizar(){
  let lista = document.getElementById("listaCarrinho");
  lista.innerHTML="";

  carrinho.forEach((item,i)=>{
    lista.innerHTML += `
      <div class="carrinho-item">
        ${item.nome} - R$ ${item.preco}
        <button class="remover" onclick="remover(${i})">
          remover
        </button>
      </div>
    `;
  });
}

carregar();
