import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Products';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  categories : Category [] = [

  ];
  product: Product = {} as Product;
  products: Product[] = [];


  constructor(private categoryService: CategoryService, private productService: ProductService){}
  ngOnInit(): void {
     //this.categories = this.categoryService.getCategories();
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts(){

    this.productService.getProducts().subscribe({
      next:data => {this.products = data}
    });
    //this.products = this.productService.getProducts();


  }


  loadCategories(){
    this.categoryService.getCategories().subscribe(
      {
        next: data => {this.categories = data}
      }

    );


  }




  saveProduct(){
    
    this.productService.save(this.product).subscribe({
      
      next: data => {

        this.products.push(data);
        this.product = {} as Product;
      }
    });


    console.log("Noveo produto cadastrado. Total Productos: "+this.products.length);

    
  }
}
