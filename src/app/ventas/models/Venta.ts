import { ProductoVenta } from "./ProductoVenta";

export class Venta {
    _idVenta?: number;
    fechaRegistro?: Date;
    vendedor: string;
    productos: ProductoVenta[];
    valor: number;

    constructor(vendedor: string, productos: ProductoVenta[], valor: number) {
        this.vendedor = vendedor;
        this.productos = productos;
        this.valor = valor;
    }
}


// export interface Venta {
//     _idVenta: string
//     fechaRegistro: Date
//     vendedor: string
//     productos: [
//         ProductoVenta
//     ]
//     valor: number
// }