import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../../Services/products.service'



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
                      //objeto            clase
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    //console.log(this.productService.getProduct())
    this.getProducts(); //llamas al metodo getProduct
  }

  getProducts(){
    this.productService.getProduct().subscribe(
      res => {
        this.productService.products = res;
        console.log(this.productService.products);
      },
      err =>{
        console.log(err);
      } 
    )
  }
}
