class Vinhos{
    constructor(id,descricao,ativo,estoque,preco,Qlitros,marca){
        this.id = id;
        this.descricao = descricao;
        this.estoque = estoque;
        this.preco = preco;
        this.Qlitros = Qlitros;
        this.marca = marca;
    }

    ativar(){
    this.ativo = true;
}
//IncluirEstoque=credito / RetirarEstoque=debito
    incluirEstoque(quantidade){
    if(this.ativo){
    if(valor<0){
    console.log("Impossivel realizar, quantidade insuficiente...")
 }

    else if(valor == 0) {
    console.log("Impossível realizar, valor zerado...")
}
 else{
    this.quantidade = this.quantidade + valor
 }
 }

 else{
 console.log("A conta está inativa...")
 }
}
    
    retirarEstoque(quantidade){ 
    if(this.ativo){
    if(valor<0){
    console.log("Impossível realizar, quantidade insuficiente...")
 }
    else if(valor == 0) {
    console.log("Impossível realizar, valor zerado...")
 }
    else if(this.quantidade < valor){
    console.log("Quantidade insuficiente...")
 }
    else{
    this.quantidade = this.quantidade - valor
 }
 }
    else{
    console.log("A conta está inativa...")
}
}
}

//Programa Principal
const leia = require("prompt-sync")()
let tipo =""
let op = ""
let valor = 0
let quantidade = 0

do{
console.log("Olá seja Bem vindo ao Emporium")
console.log("Celebre a vida com cada gole. \n")
console.log("Deseja fazer compras? S ou N")

console.log("S - continuar compra:")
console.log("N - caso não até breve")

if(tipo == "S"){
    console.log("Olá seja Bem vindo ao Emporium")
    console.log("Celebre a vida com cada gole. \n")

let id = parseInt(leia("Digite o id do vinho : "))
let descricao = leia("Digite a descricao do vinho : ")
let preco = parseInt(leia("Digite o preço sugerido : "))
let Qlitros = parseInt(leia("Digite a quantidade de litros : "))
let marca = leia("Digite a marca do vinho : ")
let produto1 = new Vinhos(id,descricao,10,false,Qlitros,marca)
cp.ativar()

for(let x=1; x<=5; x++){
    console.log("Movimento "+x)
    console.log("Nós temos : "+produto1)
    valor = parseInt(leia("Digite o quanto deseja retirar:"))
    produto1.retirarEstoque(valor)
}
valor= parseInt(leia("Digite quantos vinhos você quer colocar no estoque : "));
    produto1.incluirEstoque(valor);
    console.log("Incluimos no estoque : " + produto1.estoque) 
}

else if(tipo == "N"){
    console.log("Saindo do programa...")
}

else{
    console.log("Digitação invalida...")
}
}while(tipo != "N")
console.log("Você sempre sera bem vindo novamente em nosso banco, volte sempre")

