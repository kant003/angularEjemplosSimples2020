import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio15',
  templateUrl: './ejercicio15.component.html',
  styleUrls: ['./ejercicio15.component.css']
})
export class Ejercicio15Component implements OnInit {

  diccionarioPacientes = new Map()
  public form: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
     nombre: ['', Validators.required],
     temperatura: ['', Validators.required  ]
    })
    let texto = localStorage.getItem('diccionario')
    let objetoJavascript = JSON.parse(texto)
    this.diccionarioPacientes = new Map(Object.entries(objetoJavascript))
  }
  onSubmit(formValue){
    this.diccionarioPacientes.set(formValue.nombre, formValue.temperatura)
    // Convierto un Map a un Objeto de Javascript
    let objetoJavascript = Object.fromEntries(this.diccionarioPacientes)
    // Convierto un Objeto de Javascript a un Texto (para guardarlo en el localstorate)
    let texto = JSON.stringify( objetoJavascript )
    localStorage.setItem('diccionario', texto)
  }

  calculaColor(temperatura: number): string{
    if(temperatura > 37.2) return 'red'
    else if(temperatura < 36.1) return 'blue'
    else return 'black'
  }
  centigrados2Fahrenheit(centigrados: number): number{
    return (centigrados * 9 / 5) + 32
  }

}
