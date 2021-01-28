export class Student{
  constructor(nombre: string, notaExamen1: number, notaTrabajo1: number,
              notaExamen2: number, notaTrabajo2: number,
              notaExamen3: number, notaTrabajo3: number){
                this.nombre = nombre;
                this.notaExamen1 = notaExamen1;
                this.notaTrabajo1 = notaTrabajo1;
                this.notaExamen2 = notaExamen2;
                this.notaTrabajo2 = notaTrabajo2;
                this.notaExamen3 = notaExamen3;
                this.notaTrabajo3 = notaTrabajo3;
              }
  nombre: string;
  notaExamen1: number;
  notaTrabajo1: number;
  notaExamen2: number;
  notaTrabajo2: number;
  notaExamen3: number;
  notaTrabajo3: number;
  getNotaMedia1(){  return (this.notaExamen1*0.8 + this.notaTrabajo1*0.2) }
  getNotaMedia2(){  return (this.notaExamen2*0.8 + this.notaTrabajo2*0.2) }
  getNotaMedia3(){  return (this.notaExamen3*0.8 + this.notaTrabajo3*0.2) }
  getNotaFinal() { return (this.getNotaMedia1()+this.getNotaMedia2()+this.getNotaMedia3()) / 3 }

}
