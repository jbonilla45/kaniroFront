import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarComprasComponent } from './components/listar-compras/listar-compras.component';
import { CrearComprasComponent } from './components/crear-compras/crear-compras.component';

import { ComprasService } from './services/compras.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListarComprasComponent,
    CrearComprasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    ComprasService
  ],
  exports: [
    ListarComprasComponent,
    CrearComprasComponent
  ]
})
export class ComprasModule { }
