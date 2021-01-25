import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example18',
  templateUrl: './example18.component.html',
  styleUrls: ['./example18.component.css']
})
export class Example18Component implements OnInit {
  public form: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
     nombre: ['Bea', Validators.required],
     email: ['bea@cebem.es', [Validators.required, Validators.email]  ]
    })
  }
  onSubmit(formValue){
    alert('Se ha enviado el formulario correctamente')
  }

}
