import { Component } from '@angular/core';
import { Macchina } from '../../Models/imacchine/imacchine.module';

@Component({
  selector: 'app-macchine',
  templateUrl: './macchine.component.html',
  styleUrl: './macchine.component.scss'
})
export class MacchineComponent {
  randomCars:Macchina[] = [];
  cardArr: Macchina[] = [];

  ngOnInit(){
    this.getCards()
  }

  async getCards():Promise<void>{
    const response = await fetch('../../../assets/db.json')
    const cars = <Macchina[]> await response.json()

    this.cardArr = cars

    console.log(this.cardArr)

    this.randomCars = this.getRandomCars()
    console.log(this.randomCars)
  }

  getRandomCars(): Macchina[]{
    const shuffled = [...this.cardArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 2);
  }
}
