import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { firestore } from 'src/main';
import { Venta } from '../models/venta';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  ventas : Venta[] = [];

  constructor() { }

  agregarVenta (venta:any) {
    const ref = collection(firestore,'ventas');
    return addDoc(ref,venta);
  }

  
  async getVentas() {
    const querySnapshot = await getDocs(collection(firestore, "ventas"));
    this.ventas = [];
    querySnapshot.forEach((doc) => {
      let reg = doc.data() as any;
      let producto = JSON.parse(reg.producto) as Producto[]

      let venta = new Venta
      venta.cantidad = reg.cantidad;
      venta.descripcion = producto[0].descripcion;
      venta.fechaDeVencimiento = producto[0].fechaDeVencimiento;
      venta.fechaDeVenta = reg.fechaDeVenta;
      venta.precio = producto[0].precio;
      venta.rutaDeFoto = producto[0].rutaDeFoto;
      venta.tipo = producto[0].tipo;
      venta.id = doc.id;
      this.ventas.push(venta)

    });
    return this.ventas;
  }
}
