import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example6',
  templateUrl: './example6.component.html',
  styleUrls: ['./example6.component.css']
})
export class Example6Component implements OnInit {

  urlImagen: string
  anchoImagen: number

  constructor() {
    this.urlImagen = 'https://loremflickr.com/100/100/cat'
    this.anchoImagen = 200
  }

  ngOnInit(): void {
  }

}
