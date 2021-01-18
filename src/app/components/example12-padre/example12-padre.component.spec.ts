import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example12PadreComponent } from './example12-padre.component';

describe('Example12PadreComponent', () => {
  let component: Example12PadreComponent;
  let fixture: ComponentFixture<Example12PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example12PadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Example12PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
