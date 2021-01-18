import { Component, OnInit } from '@angular/core';
import { GeneradorNumerosService } from 'src/app/services/generador-numeros.service';

@Component({
  selector: 'app-example14',
  templateUrl: './example14.component.html',
  styleUrls: ['./example14.component.css']
})
export class Example14Component implements OnInit {
  cantidad
  listaNumeros
  constructor(private generadorNumeros: GeneradorNumerosService) {
  }

  generarNumerosMalHecho(){
    this.listaNumeros =
        this.generadorNumeros.generarNumerosAleatorios(this.cantidad)
  }

  generarNumerosBienHecho(){
    this.listaNumeros = []
    let observador$ = this.generadorNumeros
        .generarNumerosAleatoriosUsandoObservables(this.cantidad)
    observador$.subscribe(
      response => { // cuando llega algo (next)
        this.listaNumeros.push(response)
      },
      error =>{ // Cuando hay errores (error)
        alert('Hay errores en la generación de los números')
      },
      () =>{ // complete Se termina la generacion de numeros
        console.log(' Hemos terminado de generar los números')
      }
    )
  }

  ngOnInit(): void {
  }

}
