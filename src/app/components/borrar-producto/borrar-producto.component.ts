import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-producto',
  templateUrl: './borrar-producto.component.html',
  styleUrls: ['./borrar-producto.component.css']
})
export class BorrarProductoComponent {
  @Input()  producto ?: Producto;

  constructor(private productoService: ProductoService){

  }

  borrar(){
    //console.log(this.producto);
    if(this.producto){
      this.productoService.borrarProducto(this.producto)
      .then((result)=>{
        if(result){
          Swal.fire("","Producto borrado de manera correcta","success");
          //this.actualizar.emit(true);
        }else{
          Swal.fire("ERROR","El Producto no se pudo borrar","error");
        }
      })
    }


  }
}
