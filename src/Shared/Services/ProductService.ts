import { Injectable } from "@angular/core";
import { IProduct } from "../Interfaces/IProduct";
import { HttpClient } from '@angular/common/http';
import { exhaustMap, map, tap, take } from 'rxjs/operators';
import { Observable } from "rxjs";
import { AuthService } from "./AuthService";

@Injectable()

export class ProductService{
   
public productsList: IProduct[]=[];
public popularProductsList: IProduct[]=[];

constructor(private http:HttpClient, private authService:AuthService){
}

getAllDataAPI():Observable< Array<IProduct>>{
    return this.http.get< Array<IProduct> >("https://freshveggies-6a063-default-rtdb.firebaseio.com/products.json")
}


getAllProducts():Observable<IProduct[]> {
    
         return  this.authService.userAuth.pipe( take(1), exhaustMap( (user)=>{  
            return this.http.get< Array<IProduct> >("https://freshveggies-6a063-default-rtdb.firebaseio.com/products.json?auth="+user?.token).pipe(map( responsedata =>{
                let productsData:any = [];
                let ar = responsedata[Object.keys(responsedata )[0]as keyof typeof responsedata];
                productsData = ar;
                productsData = productsData.filter(  (d:any) => d !=null )
                return productsData;}))
        
        }));

                  


}


getPopularProducts(): IProduct[] {
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


getProductById(id:number):Observable<IProduct>{

 return  this.getAllProducts().pipe( map( (responseData) =>{

    console.log("all responseData is :"+responseData);
       let prod = responseData.find( (d)=>{return d.productId==id});

       let empty :IProduct ={
        productId: 0,
        productName: "",
        productDescription: "",
        categoryId: 1,
        productPrice: 0,
    };

    console.log("all data is :"+responseData)
    console.log("specifiec data is :"+prod)

       if (prod == undefined) {
        return empty 
       }else{
         return prod;
       }
      

    }) );
  

}


getProductsByCategoryId(catId:number){

    let products:any = [];

    return products;
}



}