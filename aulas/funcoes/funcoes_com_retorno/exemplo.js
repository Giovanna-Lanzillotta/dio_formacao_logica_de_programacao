
let userName = getFirstName("Felipe-Amaral-Silveira-Cantos","-")
console.log("welcome "+userName)
userName = getFirstName("Carlos Almeida Juanito Gargalo"," ")
console.log("welcome "+userName)

function getFirstName(name,splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}