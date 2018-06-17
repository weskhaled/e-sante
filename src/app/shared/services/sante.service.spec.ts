import { TestBed, inject } from '@angular/core/testing';

import { SanteService } from './sante.service';

describe('SanteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanteService]
    });
  });

  it('should be created', inject([SanteService], (service: SanteService) => {
    expect(service).toBeTruthy();
  }));
});
