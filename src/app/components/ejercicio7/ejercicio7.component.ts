import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio7',
  templateUrl: './ejercicio7.component.html',
  styleUrls: ['./ejercicio7.component.css']
})
export class Ejercicio7Component implements OnInit {
  public imc: number
  public form: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      altura: ['1.80', Validators.required],
      peso: ['80', [Validators.required]
    ]})
  }

  onSubmit(formValue){
    this.imc = this.calcularIMC(
      parseFloat(formValue.altura),
      parseFloat(formValue.peso)
    )
  }

  calcularIMC(altura: number, peso: number): number{
    let calculo = peso / (altura*altura)
    return parseFloat(calculo.toFixed(2))
  }
  calcularTextoIMC(imc: number): string{
    if(imc<16) return 'delgadez severa'
    if(imc>=16 && imc<17) return 'delgadez moderada'
    if(imc>=17 && imc<18.5) return 'delgadez leve'
    if(imc>=18.5 && imc<25) return 'peso normal'
    if(imc>=25 && imc<30) return 'preobesidad'
    if(imc>=30 && imc<35) return 'obesidad leve'
    if(imc>=35 && imc<40) return 'obesidad media'
    if(imc>=40) return 'obesidad mórbida'
  }

}
