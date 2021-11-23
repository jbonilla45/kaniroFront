import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarComprasComponent } from './components/listar-compras/listar-compras.component';
import { CrearComprasComponent } from './components/crear-compras/crear-compras.component';



@NgModule({
  declarations: [
    ListarComprasComponent,
    CrearComprasComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComprasModule { }
