import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example8',
  templateUrl: './example8.component.html',
  styleUrls: ['./example8.component.css']
})
export class Example8Component implements OnInit {
  resultado: number

  constructor() { }

  calcularSuma(num1:number, num2:number){
    this.resultado = Number(num1) + Number(num2)
  }

  ngOnInit(): void {
  }

}
