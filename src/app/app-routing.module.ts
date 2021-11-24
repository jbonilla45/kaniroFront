import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComprasComponent } from './compras/components/crear-compras/crear-compras.component';
import { ListarComprasComponent } from './compras/components/listar-compras/listar-compras.component';
import { CrearCostosComponent } from './costos/components/crear-costos/crear-costos.component';
import { ListarCostosComponent } from './costos/components/listar-costos/listar-costos.component';
import { CrearProductosComponent } from './productos/components/crear-productos/crear-productos.component';
import { ListarProductosComponent } from './productos/components/listar-productos/listar-productos.component';
import { CrearVentasComponent } from './ventas/components/crear-ventas/crear-ventas.component';
import { ListarVentasComponent } from './ventas/components/listar-ventas/listar-ventas.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: 'compras', component: ListarComprasComponent },
  { path: 'crear-compras', component: CrearComprasComponent },
  { path: 'ventas', component: ListarVentasComponent },
  { path: 'crear-ventas', component: CrearVentasComponent },
  { path: 'productos', component: ListarProductosComponent },
  { path: 'crear-productos', component: CrearProductosComponent },
  { path: 'costos', component: ListarCostosComponent },
  { path: 'crear-costos', component: CrearCostosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
