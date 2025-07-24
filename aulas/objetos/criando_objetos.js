

class formaDeBola{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    //função escrever
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    //função assar
    assar(){
        console.log("bolo assando de "+this.saborDaMassa)
    }
}

let boloFesta = new formaDeBola("chocolate", "nutella")
let boloPremium = new formaDeBola("baunilha", "coco")

console.log(boloFesta)
console.log("O recheio é de "+boloFesta.saborRecheio)

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()