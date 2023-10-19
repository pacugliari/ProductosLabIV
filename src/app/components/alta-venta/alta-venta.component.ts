import { Component, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Venta } from 'src/app/models/venta';
import { ProductoService } from 'src/app/services/producto.service';
import { VentaService } from 'src/app/services/venta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-venta',
  templateUrl: './alta-venta.component.html',
  styleUrls: ['./alta-venta.component.css']
})
export class AltaVentaComponent {

  @Output() actualizar = new EventEmitter<boolean>(); 
  productos ?: Producto[];

  formVenta = this.formBuilder.group({
    cantidad: ['', [Validators.required]],
    producto: ['', [Validators.required]],
    fechaDeVenta: ['',[Validators.required]],
  });

  constructor(private formBuilder:FormBuilder,private ventaService :VentaService,private productoService:ProductoService,private route: ActivatedRoute){

  }

  async ngOnInit(){
    //CADA VEZ QUE SE NAVEGA AL COMPONENTE SE EJECUTA ESTE CODIGO
    this.route.url.subscribe(async() => {
      this.productos = await this.productoService.getProductos();
    });
  }

  alta(){

    if(this.formVenta.valid){
      let data = {
        cantidad: this.formVenta.value.cantidad,
        producto: JSON.stringify(this.productos?.filter((element)=> element.descripcion === this.formVenta.value.producto)),
        fechaDeVenta: this.formVenta.value.fechaDeVenta
      }

      this.ventaService.agregarVenta(data)
        .then((respuesta)=>{
          Swal.fire("","Venta se guardado de manera correcta","success")
          this.actualizar.emit(true);
        })
        .catch((error)=>{
          Swal.fire("","Error al guardar la venta","error")
          console.log(error);
        })
      this.formVenta.reset();
    }else{
      Swal.fire("ERROR","Verifique los datos ingresados","error")
    }
  }

}
