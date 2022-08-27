import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductBoxComponent } from './product-box/product-box.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

import { APP_BASE_HREF } from '@angular/common';
import { ProductBoxShoppingPageComponent } from './product-box-shopping-page/product-box-shopping-page.component';
import { ProductService } from 'src/Shared/Services/ProductService';
import { CategoryService } from 'src/Shared/Services/CategoryService';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { Error404PageComponent } from './error404-page/error404-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http"
import { AuthService } from 'src/Shared/Services/AuthService';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductBoxComponent,
    HomePageComponent,
    ShopPageComponent,
    ProductBoxShoppingPageComponent,
    ProductDetailsPageComponent,
    Error404PageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    SpinnerComponent,
 
  
  ],
  imports: [BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, ProductService, CategoryService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
