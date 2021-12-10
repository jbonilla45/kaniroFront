import { Component, OnInit } from '@angular/core';

import { Compra } from '../../models/Compra';
import { ComprasService } from '../../services/compras.service';

@Component({
  selector: 'app-listar-compras',
  templateUrl: './listar-compras.component.html',
  styleUrls: ['./listar-compras.component.css']
})
export class ListarComprasComponent implements OnInit {
  listaCompras: Compra[] = [];
  sumCompras: number = 0;
  recData: string ='';

  constructor(private _compraService: ComprasService) { }

  ngOnInit(): void {
    this.obtenerCompras();
  }

  obtenerCompras() {
    this._compraService.getCompras().subscribe(data => {
      console.log(data);
      this.listaCompras = data;
      this.totalCompras();
      this.compraRecurrente();
    }, error => {
      console.log(error);
    })
  }

  eliminarCompra(id: any) {
    this._compraService.eliminarCompra(id).subscribe(data => {
      this.obtenerCompras();
    }, error => {
      console.log(error);
    })
  }

  totalCompras() {
    //funcion para agregar la suma de Compras del listado
    for (var i = 0; i < this.listaCompras.length; i++) {
      var list = this.listaCompras[i];
      this.sumCompras += (list.cantidad * list.valor);
    }
    console.log("sumCompras", this.sumCompras);
  }

  compraRecurrente() {
    //funcion para obtener la compra mas recurrente
    let tem1 = [];

    for (var i = 0; i < this.listaCompras.length; i++) {
      var list = this.listaCompras[i];
      tem1.push(list.descripcion);
    }
    tem1.sort();
    console.log("prueba", tem1);

    let conteo = new Map();

    for (const e of tem1) {
      if (conteo.has(e)) {
        conteo.set(e, conteo.get(e) + 1);
      } else {
        conteo.set(e, 1);
      }
    }
    console.log(conteo);

    let mayorConteo = 0;
    
    for (const [k, v] of conteo) {
      if (v > mayorConteo) {
        this.recData = k;
        mayorConteo = v;
      }
    }
    console.log("el mas recurrente es:", this.recData);
  }

}
