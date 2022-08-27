import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/Shared/Services/ProductService';

declare var $ : any;

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.css']
})
export class ShopPageComponent implements OnInit {

 productList:any; 

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe(data=>{this.productList= data; 
      console.log("Shoppage data loaded")} );

    $(document).ready(function()  {
      let body = <HTMLDivElement> document.body;
      let script = document.createElement('script');
      script.innerHTML='';
      script.src="../assets/js/script.js";
      script.async=true;
      script.defer=true;
      body.appendChild(script);
      console.log("Shoppage script loaded")
    })

  }

}
