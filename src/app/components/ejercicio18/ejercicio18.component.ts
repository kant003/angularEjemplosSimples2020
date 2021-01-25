import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio18',
  templateUrl: './ejercicio18.component.html',
  styleUrls: ['./ejercicio18.component.css']
})
export class Ejercicio18Component implements OnInit {
  public valorDado: number
  constructor() { }

  ngOnInit(): void {
  }

  generarNumero(): void{
    this.valorDado = Math.floor(Math.random()*6+1)
  }

  lanzar(cantidadVeces: number): void{
    let contador = 0
    let id = setInterval( ()=>{
      this.generarNumero()
      contador++
      if(contador > cantidadVeces){
        clearInterval(id)
        contador = 0
      }
    }, 300 )

  }
  getImage(){
    let rutaFotos = ['assets/uno.png', 'assets/dos.png', 'assets/tres.png', 'assets/cuatro.png', 'assets/cinco.png', 'assets/seis.png']
    return rutaFotos[this.valorDado-1]
  }
}
