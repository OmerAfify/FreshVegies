import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/Shared/Models/ICategory';
import { IProduct } from 'src/Shared/Models/IProduct';
import { CategoryService } from 'src/Shared/Services/CategoryService';
import { ProductService } from 'src/Shared/Services/ProductService';

declare var $ : any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public productList:IProduct[] = [];
  public popularProductsList:IProduct[] = [];
  public categoryList:ICategory[] = [];

  constructor(private productService:ProductService, private categoryService:CategoryService) { 

  }

  ngOnInit(): void {

    this.popularProductsList = this.productService.getPopularProducts();
    this.categoryList = this.categoryService.getAllCategories();
    this.productList = this.productService.getAllProducts();

    console.log(this.productService.getProductsByCategoryId(1));

    $(document).ready(function()  {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML='';
      script.src="../assets/js/script.js";
      script.async=true;
      script.defer=true;
      body.appendChild(script);
    

    })

  }

  getProductsByCatID(id:number){
    return this.productService.getProductsByCategoryId(id);
  }


}
