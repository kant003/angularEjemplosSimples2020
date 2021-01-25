import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example17Component } from './example17.component';

describe('Example17Component', () => {
  let component: Example17Component;
  let fixture: ComponentFixture<Example17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Example17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
