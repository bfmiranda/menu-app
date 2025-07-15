import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeronaveDetalheComponent } from './aeronave-detalhe.component';

describe('AeronaveDetalheComponent', () => {
  let component: AeronaveDetalheComponent;
  let fixture: ComponentFixture<AeronaveDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeronaveDetalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeronaveDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
