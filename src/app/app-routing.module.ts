import { NgModule } from "@angular/core";

import { HomePageComponent } from './home-page/home-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import {  RouterModule, Routes } from '@angular/router';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { RegisterPageComponent } from "./register-page/register-page.component";
import { LoginPageComponent } from "./login-page/login-page.component";


const routes:Routes=[
    {path:'',component:HomePageComponent},  
    {path:'home',component:HomePageComponent},
    {path:'productDetails/:id',component:ProductDetailsPageComponent},
    {path:'shop', component:ShopPageComponent},
    {path:"Login", component:LoginPageComponent},
    {path:"register", component:RegisterPageComponent},
    {path:"error404", component:Error404PageComponent},
    {path:"**", redirectTo:"/error404"},
    
    ]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{


}