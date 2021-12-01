import { TestBed } from '@angular/core/testing';

import { Ventas.ServiceService } from './ventas.service';

describe('Ventas.ServiceService', () => {
  let service: Ventas.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ventas.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
