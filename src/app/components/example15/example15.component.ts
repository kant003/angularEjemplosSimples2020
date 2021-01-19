import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-example15',
  templateUrl: './example15.component.html',
  styleUrls: ['./example15.component.css']
})
export class Example15Component implements OnInit {
  usuario: User
  constructor() {
    this.usuario = {
      nombre: 'Ana',
      ciudad: 'Vigo',
      isAdmin: true
    }
  }

  ngOnInit(): void {
  }

}
