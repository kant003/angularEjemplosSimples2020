import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example18Component } from './example18.component';

describe('Example18Component', () => {
  let component: Example18Component;
  let fixture: ComponentFixture<Example18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Example18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
