const leia = require("prompt-sync")()

let num = 0
num = parseInt(leia("Digite um valor entre 5 e 9: "))

console.log(num)
do{
    num=num * 3
    console.log(num) 
}while(num < 100)




