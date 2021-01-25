import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumnos';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {
  listaAlumnos: Alumno[]
  public form: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.listaAlumnos = []
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
     nombre: ['', Validators.required],
     nota: ['', [Validators.required,Validators.pattern('[0-9]*'),Validators.min(0),Validators.max(10)
    ]  ]
    })
  }
  onSubmit(formValue){
    let nuevoAlumno: Alumno = {
      id: this.getNextId(),
      nombre:formValue.nombre,
      nota:parseFloat(formValue.nota)
    }
    this.listaAlumnos.push(nuevoAlumno)
  }
  getNextId(): number{
    let nextId = 0
    this.listaAlumnos.forEach(alumno =>{
      if(alumno.id > nextId) nextId = alumno.id
    })
    return nextId+1
  }
  borrar(alumno: Alumno): void{
    let index = this.listaAlumnos.indexOf(alumno)
    this.listaAlumnos.splice(index, 1)
  }
  calcularMedia(): number{
    let suma: number = 0
    this.listaAlumnos.forEach(alumno => {
      suma += alumno.nota
    })
    let media: number = suma / this.listaAlumnos.length
    return Number.parseFloat(media.toFixed(3))
  }

}
