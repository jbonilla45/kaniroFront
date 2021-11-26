import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarVentasComponent } from './components/listar-ventas/listar-ventas.component';
import { CrearVentasComponent } from './components/crear-ventas/crear-ventas.component';




@NgModule({
  declarations: [
    ListarVentasComponent,
    CrearVentasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListarVentasComponent,
    CrearVentasComponent
  ]
})
export class VentasModule { }
