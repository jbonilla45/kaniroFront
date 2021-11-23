import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearComprasComponent } from './compras/components/crear-compras/crear-compras.component';
import { ListarComprasComponent } from './compras/components/listar-compras/listar-compras.component';
import { CrearCostosComponent } from './costos/components/crear-costos/crear-costos.component';
import { ListarCostosComponent } from './costos/components/listar-costos/listar-costos.component';
import { CrearProductosComponent } from './productos/components/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './productos/components/listar-productos/listar-productos.component';
import { CrearVentasComponent } from './ventas/components/crear-ventas/crear-ventas.component';
import { ListarVentasComponent } from './ventas/components/listar-ventas/listar-ventas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarComprasComponent,
    CrearComprasComponent,
    ListarVentasComponent,
    CrearVentasComponent,
    ListarCostosComponent,
    CrearCostosComponent,
    ListarProductosComponent,
    CrearProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
