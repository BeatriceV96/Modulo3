interface Smartphone {
    credito: number;
    numeroChiamate: number;
    ricarica(importo: number): void;
    chiamata(durataMinuti: number): void;
    chiama404(): string;
    getNumeroChiamata(): number;
    azzeraChiamata(): void;
  }

  class User implements Smartphone {
    nome: string;
    cognome: string;
    credito: number;
    numeroChiamate: number;
    costoPerMinuto: number;

    constructor(nome: string, cognome: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate =0;
        this.costoPerMinuto = 0.20;
    }
}