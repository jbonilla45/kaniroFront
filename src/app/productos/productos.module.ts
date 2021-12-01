import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';



@NgModule({
  declarations: [
    ListarProductosComponent,
    CrearProductosComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    ListarProductosComponent,
    CrearProductosComponent
  ]
})
export class ProductosModule { }
