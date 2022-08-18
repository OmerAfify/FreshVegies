import { Injectable } from "@angular/core";
import { IProduct } from "../Models/IProduct";

@Injectable()

export class ProductService{
   
public productsList: IProduct[]=[];
public popularProductsList: IProduct[]=[];

constructor(){
}

getAllProducts() : IProduct[] {
    
    this.productsList = [{productId:1,
                          productName:"tomatoes",
                          productDescription:"fresh tomatoes 10 kcal per 100 gm",
                          productPrice:30,
                        categoryId:1},
                          {productId:2,
                            productName:"cucumber",
                            productDescription:"fresh cucumber 8 kcal per 100 gm",
                            productPrice:20,
                            categoryId:1},
                            {productId:12,
                                productName:"onion",
                                productDescription:"fresh onion 8 kcal per 100 gm",
                                productPrice:20,
                                categoryId:1},
                         {productId:3,
                             productName:"bananas",
                             productDescription:"fresh carrots 5 kcal per 100 gm",
                            productPrice:10,
                            categoryId:2},
                            {productId:4,
                                productName:"avogados",
                                productDescription:"fresh avogado 10 kcal per 100 gm",
                               productPrice:15,
                               categoryId:2},
                               {productId:5,
                                productName:"pumpkin seeds",
                                productDescription:"fresh avogado 10 kcal per 100 gm",
                               productPrice:15,
                               categoryId:3},
                               {productId:5,
                                productName:"Mint Leaves",
                                productDescription:"fresh avogado 10 kcal per 100 gm",
                               productPrice:15,
                               categoryId:4},
                            
                            ]

    return this.productsList;
}

getPopularProducts():  IProduct[] {
    this.popularProductsList = [{productId:1,
        productName:"tomatoes",
        productDescription:"fresh tomatoes 10 kcal per 100 gm",
        productPrice:30,
        categoryId:1},
        {productId:4,
            productName:"avogados",
            productDescription:"fresh avogado 10 kcal per 100 gm",
           productPrice:15,
           categoryId:2}
    ]
          return this.popularProductsList;

}


getProductById(id:number):IProduct|undefined{

    let product = this.getAllProducts().find((p)=>p.productId==id);  
    return product;
}


getProductsByCategoryId(catId:number){

    let products = this.getAllProducts().filter((product)=>
        product.categoryId == catId
    )

    return products;
}



}