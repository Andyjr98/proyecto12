import { TestBed } from '@angular/core/testing';

import { FacturaFPDFService } from './factura-fpdf.service';

describe('FacturaFPDFService', () => {
  let service: FacturaFPDFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturaFPDFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
