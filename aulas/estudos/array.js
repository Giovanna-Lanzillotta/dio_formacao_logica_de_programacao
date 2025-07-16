//  método at()
let vetor_frutas = ["abacaxi","banana","manga","melancia"]
console.log(vetor_frutas)

// Retorna  o item localizo no indice especificado
console.log(vetor_frutas.at(3))
//Retorna  o item localizo no indice especificado de trás para frente
console.log(vetor_frutas.at(-3))



// método concat() - junta dois ou mais vetores

// Concatenando dois arrays
let salgados = ["coxinha","cachorro quente","joelho"]
let doces = ["bolo","brigadeiro","casadinho"]

let festa = salgados.concat(doces)
console.log(festa)


// método copyWithin()