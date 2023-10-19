import { Producto } from "./producto";

export class Venta extends Producto{
    fechaDeVenta ?: string;
    cantidad ?: number;
}