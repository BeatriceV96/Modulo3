import { Component, OnInit } from '@angular/core';
import { Macchina } from '../../Models/imacchine';
import { MacchineServiceService } from './../../Models/macchine.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  macchine: Macchina[] = [];

  constructor(private macchineService: MacchineServiceService) {}

  ngOnInit(): void {
    this.getMacchine();
  }

  getMacchine(): void {
    this.macchineService.getMacchine().subscribe((data: Macchina[]) => {
      this.macchine = data;
    });
  }
}
