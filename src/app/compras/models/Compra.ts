export class Compra {
    _id?: number;
    fechaRegistro?: Date;
    descripcion: String;
    valor: number;
    categoria: String;

    constructor(descripcion: String, valor: number, categoria: String){
        this.descripcion= descripcion;
        this.valor= valor;
        this.categoria= categoria;

    }
}