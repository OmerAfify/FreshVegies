import { IProduct } from "./IProduct";

export interface ICategory{

categoryId:number,
categoryName:string,
categoryDescription?:string, 
cateogryProductsList?:IProduct[]

}