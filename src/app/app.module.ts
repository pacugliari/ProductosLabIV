import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaProductosComponent } from './components/tabla-productos/tabla-productos.component';
import { BorrarProductoComponent } from './components/borrar-producto/borrar-producto.component';
import { BuscarProductoComponent } from './components/buscar-producto/buscar-producto.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AltaVentaComponent } from './components/alta-venta/alta-venta.component';
import { TablaVentasComponent } from './components/tabla-ventas/tabla-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaProductosComponent,
    BorrarProductoComponent,
    BuscarProductoComponent,
    BusquedaComponent,
    AltaProductoComponent,
    AltaVentaComponent,
    TablaVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
