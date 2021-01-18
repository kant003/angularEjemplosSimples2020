import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Example13HijoComponent } from './example13-hijo.component';

describe('Example13HijoComponent', () => {
  let component: Example13HijoComponent;
  let fixture: ComponentFixture<Example13HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Example13HijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Example13HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
