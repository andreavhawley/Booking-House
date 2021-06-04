import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { patrimonio } from '../Models/productos'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL= "http://localhost:3000/api/productos";
  //SI DE UNA LLAMADA GRANDE TE TRAE UN MONTON DE DATOS --> ESTO PUEDE SERVIR PARA CREAR NUESTROS TEMPLATES
                         //patrimonio porque así se llama nuestra interface en carpeta "Models"
  /*variable-->*/ products: patrimonio[] | undefined ; /*en caso de que el producto no esté definido */

  constructor( private http:HttpClient ){ }
  
  getProduct(){
    return this.http.get<patrimonio[]>(this.API_URL);
  }
}
