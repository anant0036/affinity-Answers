import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cat-one',
  templateUrl: './cat-one.component.html',
  styleUrls: ['./cat-one.component.css']
})
export class CatOneComponent implements OnInit {

  productList:any = [];
  constructor(private product: ProductServiceService,private cartService : CartService) { }

  ngOnInit(){
    this.product.fetchProduct().subscribe(data =>{
      this.productList = data;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    });
  }

  addtocart(item: any){
    this.cartService.addtoCart(item);
  }
  

}
