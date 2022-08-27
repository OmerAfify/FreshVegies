import { Injectable } from "@angular/core";
import { ICategory } from "../Interfaces/ICategory";

@Injectable()
export class CategoryService{

private categoriesList : ICategory[] = []
constructor(){}

    getAllCategories() : ICategory[] {
    
        this.categoriesList = [{categoryId:1,
                              categoryName:"Vegetables"
                                 },
                              {categoryId:2,
                                categoryName:"Fruits"
                              },
                              {categoryId:3,
                                categoryName:"Seeds"
                              },
                              {categoryId:4,
                                categoryName:"Leaves"
                              }
                              
                            ]
        return this.categoriesList;
    }



}