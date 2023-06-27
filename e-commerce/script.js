const leia=require("prompt-sync")()

console.log("Olá seja Bem vindo a MODAVESTE ")
console.log("Estilo e Elegância em Cada Costura.\n ")

//VETORES - R

let codigos = ["GRP0X-01", "GRP0X-02", "GRP0X-03", "GRP0X-04", "GRP0X-05", "GRP0X-06", "GRP0X-07", "GRP0X-08", "GRP0X-09", "GRP0X-10"]
let produto = ["bone", "calca", "bermuda afro", "bata", "camisa afro", "saia rodada", "saia style", "macacao", "camiseta tematica", "calca social afro"]
let valor = [100, 150, 90, 140, 150, 90, 90, 150, 100, 95.50]
let estoque = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10,]
let carrinho = [0, 0, 0, 0, 0,]
let decisao = "s"

//programa principal - v

do{
    console.log("---------------------------------------------")
    console.log("CODIGOS\tPRODUTO\tVALOR\tESTOQUE\tCARRINHO")
    for(let i=0; i<codigos.length; i++){
        console.log(codigos[i]+'\t'+produto[i]+'\t'+valor[i]+'\t'+estoque[i]+'\t'+carrinho[i])
        }


    if(decisao == "S"){
       console.log("Relação dos produtos") 
       console.log("CODIGOS\tPRODUTO\tVALOR\tESTOQUE\tCARRINHO")
       console.log("---------------------------------------------")

    }
    
}while(decisao != "N" || decisao != "n")
    console.log("Você sempre sera bem vindo novamente em nossa loja, até breve.")