import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Transaccion } from '../../models/transaccion';

import { TransaccionesTddComponent } from './transacciones-tdd.component';

describe('TransaccionesTddComponent', () => {
  let component: TransaccionesTddComponent;
  let fixture: ComponentFixture<TransaccionesTddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransaccionesTddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaccionesTddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('transferencia sin origen', ()=>{
    let transferencia: Transaccion = new Transaccion();
    expect(()=>{component.transferirDinero(transferencia)}).toThrow(new Error("No hay una cuenta de origen"));
  });

  
    
});
