import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import { ProductosService } from '../../sevices/productos.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {

  idProductoEliminar: string | null = null
  nombreProductoEliminar: string = ""

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
    })
    this.collectionSize = this.listaProductos.length
  }

  setProductoEliminar(id: string | null, nombre: string) {
    this.idProductoEliminar = id == '' ? null : id
    this.nombreProductoEliminar = nombre
  }

  eliminarProducto() {
    if (this.idProductoEliminar != null) {
      this.productosService.eliminarProducto(this.idProductoEliminar).subscribe(data => {
        console.log('El producto fue eliminado con exito!');
        this.router.navigate(['/productos']);
      }, error => {
        console.log(error);
      })
    }
  }
}
