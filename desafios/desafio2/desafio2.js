// Inicia a função jogadas()
jogadas()


// Função que calcula o saldo de vitorias
function saldoRank(quantidadeVitorias,quantidadeDerrotas){
    let saldo = quantidadeVitorias - quantidadeDerrotas
    return saldo
}


// Função que fala p nível do rank do jogador
function nivelRank(resultado){
    if (resultado < 10){
        resultadoJogador = "Ferro 🔨"
       return resultadoJogador 
    }
    else if((resultado >= 11 ) && (resultado <=20 )){
        resultadoJogador = "Bronze 🥉"
        return resultadoJogador
    }
    else if((resultado >= 21 ) && (resultado <=50 )){
        resultadoJogador = "Prata 🥈"
        return resultadoJogador
    }
    else if((resultado >= 51 ) && (resultado <=80 )){
        resultadoJogador = "Ouro 🥇"
        return resultadoJogador
    }
    else if((resultado >= 81 ) && (resultado <=90 )){
        resultadoJogador = "Diamante 💎"
        return resultadoJogador
    }
    else if((resultado >= 91 ) && (resultado <=100 )){
        resultadoJogador = "Lendário 🏆"
        return resultadoJogador
    }
    else{
        resultadoJogador = "Imortal 🔮"
        return resultadoJogador
    }

}

//Função com estrutura de repetição de vários jogadores
function jogadas(){

    let jogos = 0

    while(jogos < 10){
        jogos++
        let resultado = saldoRank(Math.floor(Math.random()* 200) + 1, Math.floor(Math.random()* 100) + 1)
        let nivel = nivelRank(resultado)

    console.log(`O herói tem de saldo: ${resultado} está no nível de ${nivel} `)
    }
}