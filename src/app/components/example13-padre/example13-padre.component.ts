import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example13-padre',
  templateUrl: './example13-padre.component.html',
  styleUrls: ['./example13-padre.component.css']
})
export class Example13PadreComponent implements OnInit {
  mensaje: string
  constructor() { }

  atenderAlHijo(edad: number){
    this.mensaje = 'Uno de mis hijos dice que tiene una edad de:' + edad
  }
  ngOnInit(): void {
  }

}
