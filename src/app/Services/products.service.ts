import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL= "https//localhost:3000/api/productos";
  //private URL="";
  constructor(){ }
  
  getProduct(){
    return [];
  }
}
