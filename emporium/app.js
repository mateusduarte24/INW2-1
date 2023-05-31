const url = 'http://localhost:3000/produtos'
fetch(url)
.then((req) => req.json())
.then((data) => mostraProdutos(data));

function mostraProdutos(produtos){
const htmlProdutos = produtos.map(
(produto) =>`

<div class="col">
            <div class="card h-100">
              
              <div class="card-body">
              <img src=${produto.imagem}>
                <a href="#" class="btn btn-primary dourado">Comprar</a>
              </div>
              <div class="card-footer">
              <h2>${produto.descricao}</h2>
              <h4>Valor : ${produto.valor}</h4>
              </div>
            </div>
          </div>`
);
document.getElementById('app').innerHTML = htmlProdutos;
}