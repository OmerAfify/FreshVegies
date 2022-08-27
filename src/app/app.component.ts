import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/Shared/Services/AuthService';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'FreshVegies';
  
  ngOnInit():void{

    this.authService.AutoLogin();

  } 

  constructor(private http:HttpClient, private authService:AuthService){
  
    
  }

  

}



