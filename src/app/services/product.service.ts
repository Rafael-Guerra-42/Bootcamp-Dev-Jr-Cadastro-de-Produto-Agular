import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  products:Product[] = [];
  constructor(private http: HttpClient) { }


  getProducts() :Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/products");


  }
  save(product:Product){
    return this.http.post<Product>("http://localhost:8080/products",product);
  }
}
