import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent {

  esValidoPeso : boolean = false;
  @Output() actualizar = new EventEmitter<boolean>(); 
  
  formProducto = this.formBuilder.group({
    descripcion: ['', [Validators.required]],
    tipo: ['liquido', [Validators.required]],
    fechaDeVencimiento: ['',[Validators.required]],
    precio: ['', [Validators.required]],
  });

  constructor(private formBuilder:FormBuilder,private productoService:ProductoService){

  }

  alta(){
    if(this.formProducto.valid && this.esValidoPeso){
      let data = {
        descripcion: this.formProducto.value.descripcion,
        tipo: this.formProducto.value.tipo,
        fechaDeVencimiento: this.formProducto.value.fechaDeVencimiento,
        precio: this.formProducto.value.precio,
        rutaDeFoto: "/assets/producto.png"
      }

      this.productoService.agregarProducto(data)
        .then((respuesta)=>{
          Swal.fire("","Producto se guardado de manera correcta","success")
          this.actualizar.emit(true);
        })
        .catch((error)=>{
          Swal.fire("","Error al guardar el producto","error")
          console.log(error);
        })
      this.formProducto.reset();
    }else{
      Swal.fire("ERROR","Verifique los datos ingresados","error")
    }
  }

  calcularPeso(){
    let peso = this.formProducto.value.precio;
    this.esValidoPeso =  ( Number(peso) >= 0 && Number(peso)<=1000)
  }
}
