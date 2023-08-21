const leia = require("prompt-sync")()
 
let codigo = ["COD01","COD02","COD03","COD04","COD05","COD06","COD07","COD08","COD09","COD10",]
let servico = ["DESENVOLVIMENTO DE ATLETAS","VENDAS DE COLETES TECNOLOGICOS"]
let valorUnitarioDoacao = [10.00,15.00,20.00,25.00,30.00,32.50,35.00,39.90,40.00,50.00]
let movimento = [0,0,0,0,0,0,0,0,0,0,]
let carrinho = []
let servicosCarrinho = 10

console.log("SERVIÇO\tVALOR-UNITARIO\tMOVIMENTO")

for (let i = 0; i < codigo.length; i++) {
    console.log(codigo[i]+"\t\t"+servico[i]+"\t"+valorUnitarioDoacao[i]);
    }

//mateus duarte
function adicionarCarrinho(codigos){
    let compras = codigo.indexOf(codigos);
      if (compras !== -1) {
        if (carrinho.length < servicosCarrinho){
            carrinho.push(compras);
            console.log(`Serviço "${servico[compras]}" adicionado ao carrinho.`);
          } else {
            console.log("O carrinho está cheio. Não é possível adicionar mais serviços.");
          }
        } else {
          console.log("Código de serviço inválido.");
        }
      }

function calcularValorTotal(){
    let total = 0;
        for (let compras of carrinho) {
          total += valorUnitarioDoacao[compras];
        }
        console.log(`Total da doação é de: R$${total}`);
      }
//mateus duarte
function programaPrincipal() {
        while (true) {
          console.log("\nBEM-VINDO À TECFIT\n");
      
          console.log("SERVIÇO\tVALOR-UNITARIO\tMOVIMENTO")
      
          let codigoSelecionado = prompt("Digite o código do serviço desejado: ");
          adicionarCarrinho(codigoSelecionado);
      
          let continuar = prompt("Deseja adicionar mais serviços? (S/N): ");
          if (continuar.toUpperCase() !== "S") {
            calcularValorTotal();
            carrinho.length = 0;
            console.log("\nVolte sempre!\n");
          }
        }
      }

programaPrincipal();
