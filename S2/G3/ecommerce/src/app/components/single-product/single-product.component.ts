// Importazione delle dipendenze necessarie
import { Component, Input } from '@angular/core'; // Importa Component e Input da Angular core
import { Product } from 'src/app/interfaces/product.interface'; // Importa l'interfaccia Product
import { ProductsService } from 'src/app/services/products.service'; // Importa il servizio ProductsService

// Decoratore @Component che definisce il componente
@Component({
  selector: 'app-single-product', // Selettore del componente
  templateUrl: './single-product.component.html', // Percorso al file HTML del template del componente
  styleUrls: ['./single-product.component.scss'] // Percorso al file SCSS degli stili del componente
})
export class SingleProductComponent {
  // Decoratore @Input per indicare che questa proprietà può essere passata da un componente genitore
  @Input() product!: Product; // Prodotto singolo passato come input al componente

  // Costruttore della classe che inietta il servizio ProductsService
  constructor(private prdSrv: ProductsService) { }

  // Metodo per aggiungere un prodotto al carrello
  addToCart(prd: Product) {
    this.prdSrv.addToCart(prd); // Chiama il metodo addToCart del servizio ProductsService
  }

  // Metodo per aggiungere un prodotto ai preferiti
  addToFavs(prd: Product) {
    this.prdSrv.addToFavs(prd); // Chiama il metodo addToFavs del servizio ProductsService
  }

  // Metodo per verificare se un prodotto è tra i preferiti
  isFav(id: number) {
    return this.prdSrv.isFav(id); // Chiama il metodo isFav del servizio ProductsService
  }
}
