import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCostosComponent } from './components/listar-costos/listar-costos.component';
import { CrearCostosComponent } from './components/crear-costos/crear-costos.component';



@NgModule({
  declarations: [
    ListarCostosComponent,
    CrearCostosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CostosModule { }
