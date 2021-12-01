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
  total: number = 0;

  constructor(private _compraService: ComprasService) { }

  ngOnInit(): void {
    this.obtenerCompras();
    
    for(var i = 0; i < this.listaCompras.length; i++){
      var compra = this.listaCompras[i];
      this.total += (compra.cantidad * compra.valor);
  }
  console.log("total",this.total);
    
  }

  obtenerCompras() {
    this._compraService.getCompras().subscribe(data => {
      console.log(data);
      this.listaCompras = data;
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



}
