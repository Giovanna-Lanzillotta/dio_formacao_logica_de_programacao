torrar()

function torrar(){
    console.log("torrando pão")
    injetarPao()

}

function injetarPao(){
    console.log("preparando para injetar o pão")
    console.log("finalizado")
}

// Nome de funções como ações
// function enviarEmail()
// function salvarNoBancoDeDados()

// funções com ações separadas

main()

function main(){
    getData()
    checkValues()
    sendDados()
}

// função que pega todos os dados
function getData(){
    console.log("pegando dados dos usuarios")
}

function checkValues(){
    console.log("validadndo dados")}

function sendDados(){
    console.log("cadastrando dados")
}

enviarDados()

function enviarDados(){
    let nomeDoBanco = "banco-de-dados"
    console.log("salvando dados em: "+nomeDoBanco)
}