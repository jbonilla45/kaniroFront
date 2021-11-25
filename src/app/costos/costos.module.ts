import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarCostosComponent } from './components/listar-costos/listar-costos.component';
import { CrearCostosComponent } from './components/crear-costos/crear-costos.component';



@NgModule({
  declarations: [
    ListarCostosComponent,
    CrearCostosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ListarCostosComponent,
    CrearCostosComponent
  ]
})
export class CostosModule { }
