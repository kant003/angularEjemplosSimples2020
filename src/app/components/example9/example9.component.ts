import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example9',
  templateUrl: './example9.component.html',
  styleUrls: ['./example9.component.css']
})
export class Example9Component implements OnInit {

  user: string
  pass: string
  constructor() { }
  onSubmit(){
    // Validar los datos del formulario
    // enviarlos al backend
    let mensaje = `Los datos del formulario son: ${this.user} ${this.pass}`
    alert(mensaje)
  }

  ngOnInit(): void {

  }



}
