import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example13PadreComponent } from './example13-padre.component';

describe('Example13PadreComponent', () => {
  let component: Example13PadreComponent;
  let fixture: ComponentFixture<Example13PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example13PadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Example13PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
