import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-power-boost-calculator',
  templateUrl:'calculator.component.html' 
})
export class CalculatorComponent implements OnInit {
  power = 5;
  factor = 1;
  condition = false;
  constructor() { }

  ngOnInit(): void {
  }

}
