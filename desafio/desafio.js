const leia = require("prompt-sync")()

//VARIAVEIS
let usuario 
let salario 


//ENTRADA 
usuario = leia("Digite o nome do usuário: ")
salario = parseFloat(leia("Digite o valor do salário: "))

//LAÇO REPETIÇÃO
if(salario<=2500){
    console.log(usuario+" vc é insento!!")
}
else if(salario>2500 && salario<=5000){
    valorImposto = salario * 0.15
    console.log("Olá SR"+usuario+"seu imposto é de: "+valorImposto)
    console.log("Seu salario liquido é de: "+(salario-valorImposto))
}
else{
    valorImposto = salario * 0.25
    console.log(" Olá SR" +usuario+"seu imposto é de: " +valorImposto)
    console.log("Seu salario liquido é de: "+(salario-valorImposto))
}

//FIM DO PROGRAMA
console.log("Acabamos o programa por aqui :) ")