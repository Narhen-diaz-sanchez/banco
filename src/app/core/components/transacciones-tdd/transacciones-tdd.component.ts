import { Component, OnInit } from '@angular/core';
import { Transaccion } from '../../models/transaccion';

@Component({
  selector: 'app-transacciones-tdd',
  templateUrl: './transacciones-tdd.component.html',
  styleUrls: ['./transacciones-tdd.component.scss']
})
export class TransaccionesTddComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  transferirDinero(transferencia:Transaccion){
    if(!transferencia.cuentaEnvia){
      throw new Error("No hay una cuenta de origen");
    }
    return true;
}
}
