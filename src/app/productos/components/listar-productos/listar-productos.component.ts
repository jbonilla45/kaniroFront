import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { ProductosService } from '../../sevices/productos.service';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})

export class ListarProductosComponent implements OnInit {

  idProductoEliminar: string | null = null
  nombreEliminar: string = ""

  page: number = 1;
  pageSize: number = 10;
  collectionSize: number = 0;

  listaProductos: Producto[] = [];

  constructor(private productosService: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.cargarProductos()
  }

  cargarProductos() {
    this.productosService.getProductos().subscribe(data => {
      this.listaProductos = data
      console.log(data);
    })
    this.collectionSize = this.listaProductos.length
  }

  setProductoEliminar(id: string | null, nombre: string) {
    this.idProductoEliminar = id == '' ? null : id
    this.nombreEliminar = nombre
  }

  eliminarProducto() {
    if (this.idProductoEliminar != null) {
      this.productosService.eliminarProducto(this.idProductoEliminar).subscribe(data => {
        console.log('El producto fue eliminado con exito!');
        this.ngOnInit();
        this.router.navigate(['/productos']);
      }, error => {
        console.log(error);
      })
    }
  }
}
