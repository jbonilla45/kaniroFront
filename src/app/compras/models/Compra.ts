export class Compra {
    _id?: number;
    fechaRegistro?: Date;
    descripcion: String;
    valor: number;
    cantidad: number;
    categoria: String;

    constructor(descripcion: String, valor: number, categoria: String, cantidad: number) {
        this.descripcion = descripcion;
        this.valor = valor;
        this.categoria = categoria;
        this.cantidad = cantidad;

    }
}