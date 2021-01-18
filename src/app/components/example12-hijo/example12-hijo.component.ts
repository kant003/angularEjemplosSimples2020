import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example12-hijo',
  templateUrl: './example12-hijo.component.html',
  styleUrls: ['./example12-hijo.component.css']
})
export class Example12HijoComponent implements OnInit {

  @Input() texto = ''
  @Input() tamanno = '12px'
  @Input() color = 'black'
  constructor() {
    //cccc
  }

  ngOnInit(): void {
    //vvvv
  }

}
