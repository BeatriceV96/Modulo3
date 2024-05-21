import { NumericLiteral } from "typescript";

interface iSmartPhone {
    credito: number;
    numeroChiamate: number;
}

// Dichiariamo i metodi
class User implements iSmartPhone {
    credito: number = 0;
    numeroChiamate: number = 0;
    costoMinuto: number = 0.2;
    nome: string;
    cognome: string;

    constructor(_nome: string, _cognome: string) {
        this.nome = _nome;
        this.cognome = _cognome;
    }

    // Creiamo un parametro chiamato n che permette di inserire un numero
    //il metodo set permette di scrivere ma non fa nessun output, ed é di tipo void e diviene come una propretá
    set ricarica(n: number) { // lanciamo ricarica, indicando tra le parentesi tonde ad esempio (10, per ricaricare 10 euro)
        this.credito += n; // quindi, se lanciamo il metodo ricarica, prenderà this.credito e andrà a sommare al suo attuale 'n'
    }

    chiamata(minutiChiamata: number):void { // prima di tutto dobbiamo dirgli quanto è stata lunga la chiamata, perché dobbiamo fare un calcolo di costo di centesimi per minuto
        let costo = this.costoMinuto * minutiChiamata; // qui calcoliamo il costo
        this.credito -= costo; // prendo il credito e vado a sottrarre il costo della chiamata
        this.numeroChiamate += minutiChiamata; // qui incrementiamo il numero di chiamate effettuate
    }

    get chiamata404():string{ //utilizzando il metodo get dico che questa espressione non la posso chiamare perché da adesso in poi il metodo chiamata404 va trattato se fosse una proprietá, anches se é un metodo
        return `Il credito residuo é di: ${this.credito} €`
    }

    getNumeroChiamate():number{
        return this.numeroChiamate
    }

    azzeraChiamate():void{   //void, valori che non restituiscono nulla
        this.numeroChiamate = 0;
    }
}

const user1 = new User('Mario', 'Rossi');

console.log('Credito prima della ricarica: '+user1.credito); // qui dovrebbe essere 0

user1.ricarica = 10; // questi 10 vengono sommati al credito
user1.chiamata(5);


console.log(user1.chiamata404); // credito residuo é di: 9 €  //con il metodo get spariscono le parentesi, ed io non posso piú assegnare questa proprietá. Non é piú scrivibile
