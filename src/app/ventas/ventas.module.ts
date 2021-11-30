import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// import { ListarProductosComponent } from '../productos/components/listar-productos/listar-productos.component';
import { ListarVentasComponent } from './components/listar-ventas/listar-ventas.component';
import { CrearVentasComponent } from './components/crear-ventas/crear-ventas.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    // ListarProductosComponent,
    ListarVentasComponent,
    CrearVentasComponent
  ],
  imports: [
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
