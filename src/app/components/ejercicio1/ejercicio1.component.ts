import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component implements OnInit {
  listaNumeros: number[] = [3,5,7,22,4,100]
  constructor() {
    //this.listaNumeros = this.listaNumeros.filter ( n=>n<10 )
  }

  ngOnInit(): void {
  }

  esPar(numero:number): boolean{
    return numero%2===0
  }
  esMenor(numero:number, cantidad:number): boolean{
    return numero<cantidad
  }

}
