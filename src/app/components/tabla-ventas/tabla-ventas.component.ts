import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Venta } from 'src/app/models/venta';
import { VentaService } from 'src/app/services/venta.service';

@Component({
  selector: 'app-tabla-ventas',
  templateUrl: './tabla-ventas.component.html',
  styleUrls: ['./tabla-ventas.component.css']
})
export class TablaVentasComponent {
  @Input() ventas ?: Venta[];
  
  constructor(private ventasService:VentaService){
  }

  async ngOnInit(){
    this.actualizar();
  }

  actualizar(){
    this.ventasService.getVentas()
    .then((respuesta)=> {
      //console.log(respuesta)
      this.ventas = respuesta;
    });
  }


}
