import { Component, ViewChild } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { TablaProductosComponent } from '../tabla-productos/tabla-productos.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  productos ?: Producto[];
  @ViewChild('tablaProductos') tabla?: TablaProductosComponent;

  mostrarProductosBuscados(productos : any){
    //console.log(productos);
    this.productos = productos;
    this.tabla?.actualizar();
  }
}
