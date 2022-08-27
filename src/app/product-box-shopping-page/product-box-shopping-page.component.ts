import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-box-shopping-page',
  templateUrl: './product-box-shopping-page.component.html',
  styleUrls: ['./product-box-shopping-page.component.css']
})
export class ProductBoxShoppingPageComponent implements OnInit {

  constructor() { }
 
  @Input() product:any;

  ngOnInit(): void {

  }

}
