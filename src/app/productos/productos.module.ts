import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';



@NgModule({
  declarations: [
    ListarProductosComponent,
    CrearProductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
