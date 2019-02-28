import { Component, OnInit } from '@angular/core';
import { Carro } from '../carro';
import { CARROS } from '../mock-carros';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  carros: Carro[];

  constructor() { }

  ngOnInit() {
    this.getCarros();
  }

  getCarros(): void {
    this.carros = CARROS.slice(1, 5);
  }

}
