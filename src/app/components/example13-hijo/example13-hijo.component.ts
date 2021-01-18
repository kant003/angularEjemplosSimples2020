import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-example13-hijo',
  templateUrl: './example13-hijo.component.html',
  styleUrls: ['./example13-hijo.component.css']
})
export class Example13HijoComponent implements OnInit {
  @Output() edadCambia = new EventEmitter<number>();
  constructor() { }

  avisarAPapa(edad: number){

    this.edadCambia.emit(edad)
  }
  ngOnInit(): void {
  }

}
