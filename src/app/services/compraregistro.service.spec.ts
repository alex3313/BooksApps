import { TestBed } from '@angular/core/testing';

import { CompraRegistroService } from './compraregistro.service';

describe('CompraregistroService', () => {
  let service: CompraRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
