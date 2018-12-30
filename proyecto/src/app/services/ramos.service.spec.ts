import { TestBed } from '@angular/core/testing';

import { RamosService } from './ramos.service';

describe('RamosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RamosService = TestBed.get(RamosService);
    expect(service).toBeTruthy();
  });
});
