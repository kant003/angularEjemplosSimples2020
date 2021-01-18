import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paresMayuscula'
})
export class ParesMayusculaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let resultado = '';
    //value='Angel'  -->   ['A','n','g','e','l']
    let arrayLetras = value.split('')
    for(let i=0;i<arrayLetras.length;i++){
      if(i%2===0){
        resultado += arrayLetras[i].toUpperCase()
      }else{
        resultado += arrayLetras[i].toLowerCase()
      }
    }
    return resultado;
  }

}
