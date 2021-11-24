import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cat-two',
  templateUrl: './cat-two.component.html',
  styleUrls: ['./cat-two.component.css']
})
export class CatTwoComponent implements OnInit {

  productList:any = [];
  constructor(private product: ProductServiceService, private cart:CartService) { }

  ngOnInit(){
    this.product.fetchProductjew().subscribe(data =>{
      this.productList = data;
      console.log(this.productList);
    });
  }

  addtocart(item: any){
    this.cart.addtoCart(item);
  }

}
