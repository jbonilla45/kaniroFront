import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../../sevices/productos.service';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent implements OnInit {

  id: string | null = null
  nombre: string = ""
  tipo: string = ""
  cantidad: number = 0
  descripcion: string = ""
  precioUnitario: number = 0

  constructor(private productosServicios: ProductosService, private router: Router, private aRouter: ActivatedRoute) {
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }
  cargarProducto(): void {
    if (this.id == null) {
      this.nombre = ""
      this.tipo = ""
      this.cantidad = 0
      this.descripcion = ""
      this.precioUnitario = 0
    }
    else {
      this.productosServicios.getProducto(this.id).subscribe(data => {
        this.nombre = data.nombre
        this.tipo = data.tipo
        this.cantidad = data.cantidad
        this.descripcion = data.descripcion
        this.precioUnitario = data.precio
      })
    }
  }

  guardarProducto(): void {
    const producto: Producto = {
      _id: this.id,
      nombre: this.nombre,
      tipo: this.tipo,
      cantidad: this.cantidad,
      descripcion: this.descripcion,
      precioUnitario: this.precioUnitario,
    }
    this.productosServicios.guardarProducto(producto).subscribe(data => {
      console.log('El producto [nombre] fue registrado con exito!');
      this.router.navigate(['/productos']);
    }, error => {
      console.log(error);
    })
  }
}
