const leia = require("prompt-sync")()

let maiorNum = 0
let soma = 0 
let num = 0
let contator = 0

do{
    soma = soma + num
    if(num > maiorNum){
        maiorNum = num
    }
    contator++
    num = parseInt(leia("Digite um número: "))
}while(num > 0 )
console.log("A soma desses números é de: "+soma)
console.log("O maior número é o: "+maiorNum)
console.log("A quantidade é de: "+contator)






