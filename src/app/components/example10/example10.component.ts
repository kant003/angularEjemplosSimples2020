import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example10',
  templateUrl: './example10.component.html',
  styleUrls: ['./example10.component.css']
})
export class Example10Component implements OnInit {

  nombre = 'Angel'
  fecha = new Date()

  constructor() { }

  ngOnInit(): void {
  }

}
