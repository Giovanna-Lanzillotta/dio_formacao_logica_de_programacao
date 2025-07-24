// JSON - JavaScript Object Notation
// chave e valor com o objetivo de transferir dados

//SEM USAR JSON
// let name = "Felipe"
// let age = 28
// let products = ["mouse 2xw","Teclado mecânico","Monitor"]
// let productsValues =[29.90, 129.99, 899.99]

//generateInvoice(inVoice)

// function generateInvoice(inVoiceProducts){
//     console.log("O comprador é "+name)
//     console.log("A idade é "+age)
//     console.log("-----------------------")
//     console.log("O produto é "+products[0])
//     console.log("O valor é "+productsValues[0])
// }

//....................................................................

function generateInvoice(inVoice){
    console.log(`O comprador é ${inVoice.name}`)
    console.log(`A idade é ${inVoice.age}`)
    console.log("-----------------------")
    // console.log(`Os produtos são ${inVoice.products}`)
}


// COM JSON
let inVoice = {
    name : "felipe",
    age : 28,
    products : {
       0 : ["mouse 2xmw", 29.90],
       1 : ["Teclado Mecânico", 129.99],
       2 : ["Monitor", 899.99],
       3 : ["TV 100 polegadas","1000.90"]
    },
    taxes :"98.90"
}


for(let index in inVoice.products){
    let [productName,productPrice] = inVoice.products[index]
    console.log(` - ${productName} : R$ ${productPrice}`)
}

console.log(inVoice)
console.log(inVoice.name)
console.log(inVoice.products)


generateInvoice(inVoice)

