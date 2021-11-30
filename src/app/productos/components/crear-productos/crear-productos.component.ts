import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from '../../sevices/productos.service';
import { Producto } from '../../models/Producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})

export class CrearProductosComponent implements OnInit {

  productoForm: FormGroup;
  titulo = "Crear Producto";

  idProducto: string | null = null
  nombre: string = ""
  categoria: string = ""
  cantidad: number = 0
  descripcion: string = ""
  precioUnitario: number = 0

  constructor(private fb: FormBuilder, private router: Router, private productosServicios: ProductosService, private aRouter: ActivatedRoute) {
    this.productoForm = this.fb.group({
      nombre: ["", Validators.required],
      categoria: ["", Validators.required],
      cantidad: ["", Validators.required],
      descripcion: ["", Validators.required],
      precioUnitario: ["", Validators.required],
    })
    this.idProducto = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.cargarProducto()
  }

  cargarProducto(): void {
    if (this.idProducto == null) {
      this.nombre = ""
      this.categoria = ""
      this.cantidad = 0
      this.descripcion = ""
      this.precioUnitario = 0
    }
    else {
      this.titulo = "editar producto";
      this.productosServicios.getProducto(this.idProducto).subscribe(data => {
        this.productoForm.setValue({
          nombre: data.nombre,
          categoria: data.categoria,
          cantidad: data.cantidad,
          descripcion: data.descripcion,
          precioUnitario: data.precioUnitario
        })
      })
    }
  }

  guardarProducto(): void {
    const producto: Producto = {
      _id: this.idProducto,
      nombre: this.productoForm.get('nombre')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      cantidad: this.productoForm.get('cantidad')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      precioUnitario: this.productoForm.get('precioUnitario')?.value,
    }

    this.productosServicios.guardarProducto(producto).subscribe(data => {
      console.log('El producto [nombre] fue registrado con exito!');
      this.router.navigate(['/productos']);
    }, error => {
      console.log(error);
    })
  }
}
