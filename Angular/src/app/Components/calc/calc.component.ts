import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
//The functionalities of the componet is written in the .ts file..
export class CalcComponent {
  firstValue : number = 123;
  secondValue : number = 234;
  operand : string = "+";
  result : number = this.firstValue + this.secondValue;
  
  calculate(){
    switch (this.operand) {
      case "+":
        this.result = this.firstValue + this.secondValue;
        break;
      case "-":
        this.result = this.firstValue - this.secondValue;
        break;
      case "X":
        this.result = this.firstValue * this.secondValue;
        break;
      case "/":
        this.result = this.firstValue / this.secondValue;
        break;
    }
  }

}
