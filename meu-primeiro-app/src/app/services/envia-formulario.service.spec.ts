import { TestBed } from '@angular/core/testing';

import { EnviaFormularioService } from './envia-formulario.service';

describe('EnviaFormularioService', () => {
  let service: EnviaFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnviaFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
