import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IRegisterResponseData } from 'src/Shared/Interfaces/IAuthResponseData';
import { IUser } from 'src/Shared/Interfaces/IUser';
import { AuthService } from 'src/Shared/Services/AuthService';
    

declare var $ : any;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

formData:any;

user:IUser={
  email:'',
  password:''
}
error:string = "";

isLoading= false;
responseData:any;

changeloading(){
  this.isLoading = !this.isLoading;
}

  constructor(private authService:AuthService) { }

  ngOnInit(): void {

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

  onSubmitRegisterForm(RegisterForm : NgForm){

    this.changeloading();

    this.formData = RegisterForm //to get extra details about the form ex valid, touched, controls ....
    
    this.user.email = this.formData.value.email,
    this.user.password = this.formData.value.password

    this.authService.SignUp(this.user).subscribe(
      (responseDataObj)=>{
        this.responseData = responseDataObj;
        this.error = "";
        this.changeloading();
      }
    ,(error)=>{
      this.error = error;
     console.log(this.error)
     this.changeloading();
    })
     
    this.formData.reset();

  }

}
