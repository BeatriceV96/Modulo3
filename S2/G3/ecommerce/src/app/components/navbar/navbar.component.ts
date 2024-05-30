import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {  //implements OnInit indica che la classe implementa l'interfaccia OnInit.//

  constructor() { }          // Il costruttore è un metodo che viene chiamato all'atto della creazione dell'istanza del componente.//

  ngOnInit(): void {            //ngOnInit() è il metodo che viene eseguito dopo che Angular ha inizializzato il componente.//
  }

}
