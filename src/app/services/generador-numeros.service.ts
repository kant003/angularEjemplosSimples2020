import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneradorNumerosService {
  constructor() { }

  generarNumerosAleatorios(cantidad: number): number[]{
    let listaNumeros = []
    for(let i=0;i<cantidad;i++){
      let numAleatorio = Math.round( Math.random()*10 )
      listaNumeros.push(numAleatorio)
    }
    return listaNumeros
  }

  generarNumerosAleatoriosUsandoObservables(cantidad: number): Observable<any>{
    return new Observable ( (observe)=>{
      if(cantidad < 0){
        observe.error('No puedes generar cantidades negativas')
      }
      for(let i=0;i<cantidad;i++){
        let numAleatorio = Math.round( Math.random()*10 )
        observe.next(numAleatorio)
      }
      observe.complete()
    })
  }


}
