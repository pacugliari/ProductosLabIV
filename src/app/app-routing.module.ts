import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { AltaVentaComponent } from './components/alta-venta/alta-venta.component';
import { TablaVentasComponent } from './components/tabla-ventas/tabla-ventas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '**' },
  { path: 'productos', component: TablaProductosComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'productos/alta', component: AltaProductoComponent },
  { path: 'ventas/nueva', component: AltaVentaComponent },
  { path: 'ventas/listado', component: TablaVentasComponent },
  { path: '**', component: TablaProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
