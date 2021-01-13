import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example7',
  templateUrl: './example7.component.html',
  styleUrls: ['./example7.component.css']
})
export class Example7Component implements OnInit {

  colorDefecto = 'orange'
  constructor() { }

  getColorRandom(){
    let colores = ['red','blue','orange','black','violet','green']
    return colores[ Math.round(Math.random()*5)]
  }

  ngOnInit(): void {
  }

}
