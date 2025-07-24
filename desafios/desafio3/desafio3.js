
class caracteristicasHeroi{
    constructor(nomeHeroi, idadeHeroi, tipoHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi

        }

    atacarVilao(){

    if(this.tipoHeroi == "guerreiro"){
        console.log(`o ${this.tipoHeroi} atacou usando espada  `)
            
    }else if(this.tipoHeroi == "mago"){
        console.log(`o ${this.tipoHeroi} atacou usando magia  `)

    }else if(this.tipoHeroi == "monge"){
        console.log(`o ${this.tipoHeroi} atacou usando artes maciais `)
      
    }else if(this.tipoHeroi == "ninja"){
        console.log(`o ${this.tipoHeroi} atacou usando shuriken `)
    }else{
        console.log("Este herói ainda não está disponivel")
    }

}
}

let heroiGuerreiro = new caracteristicasHeroi("lulu", "21","guerreiro")
let heroiMago = new caracteristicasHeroi("merlin", "98","mago")
let heroiMonge  = new caracteristicasHeroi("zeze","67","monge")
let heroiNinja = new caracteristicasHeroi("Lila","31","ninja")

heroiGuerreiro.atacarVilao()
heroiMago.atacarVilao()
heroiMonge.atacarVilao()
heroiNinja.atacarVilao()