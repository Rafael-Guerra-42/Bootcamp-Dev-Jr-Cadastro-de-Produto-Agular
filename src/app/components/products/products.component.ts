import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Products';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  categories : Category [] = [
    {id: 1,name: "Producao Propria"},
    {id: 2,name: "Nacional"},
    {id: 3,name:"Importado"},
    {id: 4,name: "Premium"},
  ];
  product: Product = {} as Product;
  products: Product[] = [];


  constructor(){}
  ngOnInit(): void {
      
  }

  saveProduct(){
    this.product.id = this.products.length+1;
    this.products.push(this.product);
    this.product = {} as Product;

    console.log("Noveo produto cadastrado. Total Productos: "+this.products.length);

    
  }
}
