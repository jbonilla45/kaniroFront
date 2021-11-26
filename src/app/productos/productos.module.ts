import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';



@NgModule({
  declarations: [
    ListarProductosComponent,
    CrearProductosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListarProductosComponent,
    CrearProductosComponent
  ]
})
export class ProductosModule { }
