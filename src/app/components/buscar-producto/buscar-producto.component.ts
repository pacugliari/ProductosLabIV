import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscar-producto',
  templateUrl: './buscar-producto.component.html',
  styleUrls: ['./buscar-producto.component.css']
})
export class BuscarProductoComponent {

  @Output() eventProductoBuscado = new EventEmitter<Producto[]>(); 

  constructor(private formBuilder:FormBuilder,private productoService : ProductoService){

  }

  formBuscar = this.formBuilder.group({
    descripcion: ['',],
  });

  buscar(){
    //console.log(this.formBuscar.value.descripcion)
    this.productoService.buscarProducto(this.formBuscar.value.descripcion)
    .then((respuesta : Producto[])=>{
      if(respuesta.length === 0)
        Swal.fire("","No hay productos con esa descripcion","error");
      this.eventProductoBuscado.emit(respuesta);
    })
    .catch((error)=>{
      console.log(error);
    })
    this.formBuscar.reset();
  }

}
