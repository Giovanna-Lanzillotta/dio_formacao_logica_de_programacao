// função com parametro

torrar("pao de forma","giovanna")
torrar("pao integral","felipe")
torrar("pao frances","janaina")


function torrar(pao,nome){
    console.log("torrada feita com "+pao)
    console.log("Ela é um pedido de "+nome)
}

torrar2("pao integral",12.90)
torrar2("pao integral","Felipe",10.90)
torrar2("pao integral",undefined,"anita") //Não é uma boa pratica

function torrar2(pao2,nome2valor = 99.90){ //valor opcional por ultimo
    console.log("torrada feita com "+pao2)
    console.log("Ela é um pedido de "+nome2)
    console.log("O valor total é "+valor)
}

