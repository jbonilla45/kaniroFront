import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductosModule } from '../productos/productos.module';
import { ListarVentasComponent } from './components/listar-ventas/listar-ventas.component';
import { CrearVentasComponent } from './components/crear-ventas/crear-ventas.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListarVentasComponent,
    CrearVentasComponent
  ],
  imports: [
    ProductosModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    ListarVentasComponent,
    CrearVentasComponent
  ]
})
export class VentasModule { }
