import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductosComponent } from './components/crear-productos/crear-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';



@NgModule({
  declarations: [
    ListarProductosComponent,
    CrearProductosComponent,
    EditarProductoComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    ListarProductosComponent,
    CrearProductosComponent
  ]
})
export class ProductosModule { }
