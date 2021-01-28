import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio12PokemonDetalleComponent } from './ejercicio12-pokemon-detalle.component';

describe('Ejercicio12PokemonDetalleComponent', () => {
  let component: Ejercicio12PokemonDetalleComponent;
  let fixture: ComponentFixture<Ejercicio12PokemonDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ejercicio12PokemonDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejercicio12PokemonDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
