import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products:Product[] = [];
  constructor() { }


  getProducts() :Product[] {
    return this.products;

  }
  save(product:Product){
    product.id = this.products.length+1;
    this.products.push(product);
  }
}
