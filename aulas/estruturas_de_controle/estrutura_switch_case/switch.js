// estrutura de decisão
// switch/case/break/default

let fruta = "morango"

switch (fruta){
    case "laranja":
    console.log("suco de laranja")
    console.log("segunda mensagem")
    break

    case "banana":
    case "morango":
    console.log("vitamina "+fruta)
    break

    case "maça":
    console.log("suco de maça")
    break

    default:
    console.log("suco genérico")
}