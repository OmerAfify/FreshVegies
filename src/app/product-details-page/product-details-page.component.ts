import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IProduct } from 'src/Shared/Models/IProduct';
import { ProductService } from 'src/Shared/Services/ProductService';

declare var $:any; 

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {

productId : any;
product : any;

  constructor(private _productService:ProductService, private _route:ActivatedRoute) { }

  ngOnInit(): void {

this._route.params.subscribe((params:Params)=>{
  this.productId = params['id'];
})

this.product = this._productService.getProductById(this.productId);


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

}
