//Classes 
class Conta{
    constructor(numero,cpf,saldo,ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.saldo = saldo;
        this.ativo = ativo;
    }
    ativar(){
        this.ativo = true;
    }
    credito(valor){
        if(this.ativo){
           if(valor<0){
            console.log("Impossivel realizar, valor negativo...")
           }
        
        else if(valor==0){
            console.log("Impossivel Realizar, valor zerado...")
        }
        else{
            this.saldo+=valor
        }
        }
    
        else{
        console.log("Conta Inativa!")
    }
}

    debito(valor){
        if(this.ativo){
            if(valor<0){
                console.log("Impossivel realizar, valor negativo...")
            }
            else if(valor==0){
                console.log("Impossivel realizar, valor zerado...")
            }
            else if(valor>=this.saldo){
                console.log("Impossivel realizar, valor indisponivel...")
            }
            else{
                this.saldo -= valor
            }
        } 
        else {
            console.log("Conta Inativa!")
        }  
            
    } 
    
}
//SUB-CLASSE POUPANÇA
class poupanca extends Conta {
    constructor(numero,cpf,saldo,ativo,diaAniversarioConta){
        super(numero,cpf,saldo,ativo);
        this.diaAniversarioConta = diaAniversarioConta;
    }

    correcao(dia){
        console.log("analisando correção...")
    }

}
//SUB-CLASSE CORRENTE


//SUB-CLASSE ESTUDANTIL
class estudantil extends Conta{
    constructor(numero,cpf,saldo,ativo,limiteEstudantil){
        super(numero,cpf,saldo,ativo);
        this.limiteEstudantil = limiteEstudantil;
    }
    usarEstudantil(valor){
        if (valor<0){
            console.log("Impossivel realizar, saldo negativo...")
        }
        else if (valor ==0){
            console.log("Impossivel realizar, saldo negativo...")
        }
        else if (valor > (this.saldo + this.limiteEstudantil)){
            console.log("Impossivel realizar, usar valor no limite do saldo...")
        }
        else {
            this.limiteEstudantil = this.limiteEstudantil - valor
            credito(valor)
        }
        
    }
}

//PROGRAMA PRINCIPAL
const leia = require("prompt-sync")()
let opcao = ""

//MONTANDO MENU
do {
    console.log("")
    console.log("1 - CONTA POUPANÇA")
    console.log("2 - CONTA CORRENTE")
    console.log("3 - CONTA ESPECIAL")
    console.log("4 - ESTUDANTIL")
    console.log("5 - SAIR")
    opcao = leia("Digite o Número da sua opção : ")
    if(opcao == "1"){
        console.log("Testando a conta poupança ")
        let numero = leia("Digite o número da conta : ")
        let cpf = leia("Digite o cpf da conta : ")
        let diaAniversarioConta = leia("Digite o dia do aniversário da conta : ")
        let cp1 = new poupanca(numero,cpf,0,false,diaAniversarioConta)
        let op=""
        for (let x=1;x<=10;x++){
            valor = leia("Digite o valor:")
            op = ("Digite D debito ou C crédito")
            if (op == D){
                cp1.debito=(valor)
            }
            else if (op == C){
                cp1.credito(valor)
            }
            console.log("Saldo atual R$ : "+cp1.saldo )

        }
    }
    else if(opcao == "4"){
        console.log("Testando conta estudantil ")
        let numero = parseFloat =(leia("Digite o número da conta: "))
        let cpf = leia("Digite o cpf:")
        let cel1 = new estudantil(numero, cpf, 0, false, 5000)
        let op=""
        cel1.ativar(Conta)
        let valor=0
        for (let x=1;x<=5;x++){
            valor = parseInt (leia("Digite o valor:"))
            op = leia("Digite D debito ou C crédito: ")
            if (op == "D"){
                cel1.debito(valor)
            }
            else if (op == "C"){
                cel1.credito(valor)
            }
            console.log("Saldo atual R$ : "+cel1.saldo )
        }
        valor = (leia("Usar limite ? valor :"))
        cel1.usarEstudantil(valor)
        console.log("Saldo final :" +cel1.saldo)
    }
    else if(opcao == "5"){
        console.log("Saindo do programa... ")
    }
}while(opcao !="5")
console.log("Fim do programa, volte sempre ")

/*

let numero = parseFloat(leia("Digite o numero da conta: "))
let cpf = leia ("Digite o cpf da conta: ")
let c1 =  new Conta(numero,cpf,0,false)
let op =""
c1.ativar()
for (let x=1; x<=10; x++){
    console.log("Movimento: "+x)
    console.log("Saldo atual da conta: "+c1.saldo)
    op = leia("Digite D- debito e C- credito: ")
    if(op=="D"){
        valor = parseInt (leia("Digite o valor para debito: "))
        c1.debito(valor)
    }
    else if(op=="C"){
        valor = parseInt (leia("Digite o valor para credito: "))
        c1.credito(valor)
    }
    console.log("Saldo final da conta: "+c1.saldo)
}
*/

