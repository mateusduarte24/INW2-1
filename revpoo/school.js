const leia = require("prompt-sync")()

let alunos = ['Matilde', 'Tony', 'Ramos', 'Clemensio']
let notas = [0,0,0,0]

for(let i=0;i<alunos.length;i++){
    console.log(alunos[i])
    notas[i] = parseInt(leia("Digite as notas que esse aluno possui: "))
}

console.log("BOLETIM")
console.log("ALUNOS\tNOTAS")
for(let i=0;i<alunos.length;i++){
    console.log(alunos[i]+'\t'+notas[i])
}

//IMCOMPLETO.....



