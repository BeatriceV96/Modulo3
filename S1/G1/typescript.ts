interface iSmartPhone{
    dito: number;
    numeroChiamate: number;
}

class User implements iSmartPhone{
    credito: number = 0;
    numeroChiamate: number = 0;
    costoMinuto:number = 0.20;
    nome!:string;
    cognome!:string;

    constructor(_nome:string, _cognome:string){
        this.nome = _nome
        this.cognome = _cognome
    }

    ricarica(n:number){
        this.credito += n
    }
}