import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.css']
})
export class Example5Component implements OnInit {

  nombre: string

  constructor() {
  }

  ponerNombreDefecto(){
    this.nombre = "Bea"
  }

  ngOnInit(): void {
  }

}
