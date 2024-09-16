import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaFPDFComponent } from './factura-fpdf.component';

describe('FacturaFPDFComponent', () => {
  let component: FacturaFPDFComponent;
  let fixture: ComponentFixture<FacturaFPDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaFPDFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaFPDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
