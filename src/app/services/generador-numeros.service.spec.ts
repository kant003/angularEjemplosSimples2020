import { TestBed } from '@angular/core/testing';

import { GeneradorNumerosService } from './generador-numeros.service';

describe('GeneradorNumerosService', () => {
  let service: GeneradorNumerosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorNumerosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
