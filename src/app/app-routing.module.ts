import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComprasComponent } from './compras/components/crear-compras/crear-compras.component';
import { ListarComprasComponent } from './compras/components/listar-compras/listar-compras.component';
import { ListarCostosComponent } from './costos/components/listar-costos/listar-costos.component';
import { HomeComponent } from './home/components/home/home.component';
import { ListarProductosComponent } from './productos/components/listar-productos/listar-productos.component';
import { ListarVentasComponent } from './ventas/components/listar-ventas/listar-ventas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'compras', component: ListarComprasComponent },
  { path: 'crearCompras', component: CrearComprasComponent },
  { path: 'ventas', component: ListarVentasComponent},
  { path: 'productos', component: ListarProductosComponent},
  { path: 'costos', component: ListarCostosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
