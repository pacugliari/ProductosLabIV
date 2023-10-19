import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-tabla-productos',
  templateUrl: './tabla-productos.component.html',
  styleUrls: ['./tabla-productos.component.css']
})
export class TablaProductosComponent {
  @Input() productos ?: Producto[];
  @Input()  mostrarSeleccionar : boolean = true;
  @Input()  cargarProductos : boolean = true;
  @Output() eventPizzaSeleccionada = new EventEmitter<Producto>();
  
  constructor(private productoService:ProductoService){
  }

  async ngOnInit(){
    this.actualizar();
  }

  actualizar(){

    if(this.cargarProductos){
      this.productoService.getProductos()
      .then((respuesta)=> {
        //console.log(respuesta)
        this.productos = respuesta;
      });
    }
  }

  seleccionar(producto : Producto){
    this.eventPizzaSeleccionada.emit(producto);
  }
}
