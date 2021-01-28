import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio14',
  templateUrl: './ejercicio14.component.html',
  styleUrls: ['./ejercicio14.component.css']
})
export class Ejercicio14Component implements OnInit {
  textoSinConvertir=""
  textoConvertido=""
  constructor() { }

  ngOnInit(): void {
  }
  convertir(){
    this.textoConvertido = this.textoSinConvertir.toUpperCase()
  }
  getColor(){
    return this.isVisible()?'green':'red'
  }
  isVisible(){
    return this.textoSinConvertir.length >= 4
  }

}
