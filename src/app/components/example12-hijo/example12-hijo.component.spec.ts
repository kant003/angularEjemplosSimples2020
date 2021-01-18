import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example12HijoComponent } from './example12-hijo.component';

describe('Example12HijoComponent', () => {
  let component: Example12HijoComponent;
  let fixture: ComponentFixture<Example12HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example12HijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Example12HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
