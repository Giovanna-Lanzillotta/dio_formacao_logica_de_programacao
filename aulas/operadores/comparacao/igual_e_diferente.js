let numero = "1"

console.log(numero === "1")

// = é atribuição
// == é para comparar valor
// === é para comparar valor e o formato do conteúdo
// !== é diferente?

let marca = "Apple"
console.log(marca !== "Apple")

marca = "Apple"
console.log(marca !== "Samsung")

//Guardar o valor em uma variavel de resultado TRUE?FALSE
let modelo = "Apple"
let resposta = marca === "Samsung"

console.log(resposta)



let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCpfBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario esta barrado:? "+ehCpfBloqueado)


let CpfPermitido = "222.555.333-01"
let cpfDoUsuario =  "222.555.333-02"

let eleEhBloqueado = cpfDoUsuario !== CpfPermitido
console.log("é um usuario invalido ?" +eleEhBloqueado)