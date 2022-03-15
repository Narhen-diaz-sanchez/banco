import { Cuenta } from "./cuenta";

export class Transaccion {

    constructor(
        public cuentaEnvia?:Cuenta,
        public cuentaRecive?:Cuenta,
        public valor?:number
    ){}

}
