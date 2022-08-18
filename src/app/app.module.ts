import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

import {  RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { ProductBoxShoppingPageComponent } from './product-box-shopping-page/product-box-shopping-page.component';
import { ProductService } from 'src/Shared/Services/ProductService';
import { CategoryService } from 'src/Shared/Services/CategoryService';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';

const routes:Routes=[
{path:'',redirectTo:"/home", pathMatch:"full"},
{path:'home', component:HomePageComponent},
{path:'productDetails/:id',component:ProductDetailsPageComponent},
{path:'shop', component:ShopPageComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductBoxComponent,
    HomePageComponent,
    ShopPageComponent,
    ProductBoxShoppingPageComponent,
    ProductDetailsPageComponent
  ],
  imports: [ 
    BrowserModule, 
    RouterModule.forRoot(routes)
   
  ],
  providers: [ProductService, CategoryService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
