const leia=require("prompt-sync")()

let codigo = ["p01","p02","p03","p04"]
let produtos = ["camisa","calça","saia","short"]
let preco = [0,0,0,0]

console.log("COD\tPRODUTO\tPREÇO")
for(let i=0; i<codigo.length; i++){
    console.log(codigo[i]+'\t'+produtos[i]+'\t'+preco[i])
}

console.log("A digitação de valores")
for(let i=0; i<codigo.length; i++){
    console.log(codigo[i]+'\t'+produtos[i])
    preco[i] = leia("Digite o valor do produto")
}

console.log("COD\tPRODUTO\tPREÇO")
for(let i=0; i<codigo.length; i++){
    console.log(codigo[i]+'\t'+produtos[i]+'\t'+preco[i])
}

console.log("Alteração de Dados")
let codigos = leia("Digite o codigo do produto que deseja trocar o nome: ")
for(let i=0; i<codigo.length; i++){
    if(codigos == codigo[i]){
        console.log("Nome atual do produto: "+produtos[i])
        produtos[i] = leia("Digite o novo nome: ")
    }
}

console.log("COD\tPRODUTO\tPREÇO")
for(let i=0; i<codigos.length; i++){
    console.log(codigos[i]+'\t'+produtos[i]+'\t'+preco[i])
}