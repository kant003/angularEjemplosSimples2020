import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-ejercicio11',
  templateUrl: './ejercicio11.component.html',
  styleUrls: ['./ejercicio11.component.css']
})
export class Ejercicio11Component implements OnInit {
  listaEstudiantes: Student[] = []
  public form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.listaEstudiantes = []
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      notaExamen1: ['', [Validators.min(0), Validators.max(10)]],
      notaTrabajo1: ['', [Validators.min(0), Validators.max(10)]],
      notaExamen2: ['', [Validators.min(0), Validators.max(10)]],
      notaTrabajo2: ['', [Validators.min(0), Validators.max(10)]],
      notaExamen3: ['', [Validators.min(0), Validators.max(10)]],
      notaTrabajo3: ['', [Validators.min(0), Validators.max(10)]],
     })
  }
  onSubmit(formValue){
    let estudianteNuevo = new Student(
      formValue.nombre, formValue.notaExamen1, formValue.notaTrabajo1,
      formValue.notaExamen2, formValue.notaTrabajo2,
       formValue.notaExamen3, formValue.notaTrabajo3
    )
    this.listaEstudiantes.push(estudianteNuevo)
  }
  getNumAprobados(){
    let estudiantesFiltrados =
      this.listaEstudiantes.filter(estudiante=> estudiante.getNotaFinal() >= 5)
      return estudiantesFiltrados.length
  }
  getNumSuspensos(){
    let estudiantesFiltrados =
      this.listaEstudiantes.filter(estudiante=> estudiante.getNotaFinal() < 5)
      return estudiantesFiltrados.length
  }
  // Si no se presentó a algun examen (trabajo no) de alguna evaluacion,
  // lo tomamos como no presentado
  getNumNoPresentados(){
    let estudiantesFiltrados =
  }
  getMediaTotal(){
    let suma = 0;
    this.listaEstudiantes.forEach(estudiante =>{
      suma += estudiante.getNotaFinal()
    })
    return suma / this.listaEstudiantes.length
  }
}
