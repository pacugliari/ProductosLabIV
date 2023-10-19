import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Producto } from '../models/producto';
import { firestore } from 'src/main';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos : Array<Producto> = [];

  constructor() { }

  agregarProducto (producto:any) {
    const ref = collection(firestore,'productos');
    return addDoc(ref,producto);
  }

  async buscarProducto(descripcion:any){
    await this.getProductos();
    return this.productos.filter((element)=> element.descripcion === descripcion)
  }

  async borrarProducto(producto: Producto){
    let retorno = false;
    const usuarioRef = collection(firestore,'productos');
      console.log(producto.id)
      const documento = doc(usuarioRef,producto.id)
      await deleteDoc(documento)
        .then((respuesta)=>{
          retorno = true;
        })
        .catch((error) => {
      });
      return retorno;
  }


  async getProductos() {
    const querySnapshot = await getDocs(collection(firestore, "productos"));
    this.productos = [];
    querySnapshot.forEach((doc) => {
      let producto = doc.data() as any;
      producto.id = doc.id;
      this.productos.push(producto)
    });
    return this.productos;
  }
}
