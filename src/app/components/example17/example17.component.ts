import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-example17',
  templateUrl: './example17.component.html',
  styleUrls: ['./example17.component.css']
})
export class Example17Component implements OnInit {
  public elId = ''
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.elId = this.activatedRoute.snapshot.params['id']
  }

}
