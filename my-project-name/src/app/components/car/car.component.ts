import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  isEdit:boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Autopilot', 'AutoParking'];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  addOpt(option:string) {
    this.options.unshift(option)
    return false;
  }

  deleteOpt(option:string) {
    for (let i = 0; i < this.options.length; i++) {
      if(this.options[i] === option)
        this.options.splice(i, 1);
        break;
    }
  }



  carSelect(carName: string) {
    if (carName === 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'blue',
        salon: 'white',
        wheels: 'silver'
      };
      this.options = ['ABS', 'Autopilot', 'AutoParking'];
    } else if (carName === 'audi') {
      this.name = 'Audi';
      this.speed = 235;
      this.model = 'RS8';
      this.colors = {
        car: 'white',
        salon: 'black',
        wheels: 'silver'
      };
      this.options = ['ABS', 'Autopilot', 'AutoParking'];
    } else if (carName === 'mer') {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'С180';
      this.colors = {
        car: 'red',
        salon: 'black',
        wheels: 'black'
      };
      this.options = ['ABS', 'Autopilot', 'AutoParking'];
    }

  }
}
interface Colors {
  car: string,
  salon: string,
  wheels: string
}
