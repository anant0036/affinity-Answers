import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http : HttpClient) { }

  fetchProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products/category/electronics")
    .pipe(map((res:any)=>{
      return res;
    }));
  }

  fetchProductjew(){
    return this.http.get<any>("https://fakestoreapi.com/products/category/jewelery")
    .pipe(map((res:any)=>{
      return res;
    }));
  }


}
