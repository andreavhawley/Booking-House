import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL= "http://localhost:3000/api/productos";
  constructor( private http:HttpClient ){ }
  
  getProduct(){
    return this.http.get(this.API_URL);
  }
}
