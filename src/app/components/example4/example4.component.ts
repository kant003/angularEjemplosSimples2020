import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  contador: number = 0
  constructor() { }

  incrementar() {
    this.contador++;
  }

  esPar(){
    return this.contador % 2 === 0
  }

  esPrimo(){
    let numeroPrimo = true;
    for(let i=1; i<this.contador;i++){
      if(this.contador / i === Math.round(this.contador / i)
        && i!==1 && i!==this.contador){
        numeroPrimo = false
        break
      }
    }
    return numeroPrimo
  }

  ngOnInit(): void {
  }
}
