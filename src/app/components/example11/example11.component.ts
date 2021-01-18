import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example11',
  templateUrl: './example11.component.html',
  styleUrls: ['./example11.component.css']
})
export class Example11Component implements OnInit {

  frase='Hola <b>esto está en negrita</b>'
  constructor() { }

  ngOnInit(): void {
    document.getElementById('miParrafo').innerHTML = this.frase
  }

}
