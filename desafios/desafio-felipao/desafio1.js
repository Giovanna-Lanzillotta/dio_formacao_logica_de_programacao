// Desafio 1

//nome do héroi
let nomeHeroi = "mestre dos jogos"

// Quantidade da soma de Xp inicial
let quantidadeXp = 0


//Repetição de Pontos após 5 partidas a cada partida é somado um número aleatorio
for (let partidas = 0; partidas < 10; partidas++){
quantidadeXp = 1000  + Math.floor(Math.random()* 9999) + 1
}


// Estrutura de condição
if (quantidadeXp < 1000){
    nivel = "Ferro 🔨"
}
else if((quantidadeXp > 1000) && (quantidadeXp <= 2000)){
    nivel = "Bronze 🥉"
}
else if((quantidadeXp >= 2001) && (quantidadeXp <= 5000)){
    nivel = "Prata 🥈"
}
else if((quantidadeXp >= 5001)  && (quantidadeXp <= 7000)){
    nivel = "Ouro 🥇"
}
else if((quantidadeXp >= 7001) && (quantidadeXp <= 8000)){
    nivel = "platina 🦾"
}
else if((quantidadeXp >=8001) && (quantidadeXp <= 9000)){
    nivel = "Ascendente 💎"
}
else if((quantidadeXp >= 9001) && (quantidadeXp <= 10000)){
    nivel ="Imortal 👻"
}
else{
    nivel = "Radiante 🌞"
}

console.log("O héroi de nome "+nomeHeroi+" está no nivel: "+nivel+" com "+quantidadeXp)