import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/Shared/Interfaces/IUser';
import { AuthService } from 'src/Shared/Services/AuthService';

declare var $:any;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

form :any;

user:IUser={
  email:"",
  password:""
}

  constructor(private authservice:AuthService) { }

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

  onSubmitLoginForm(LoginForm : NgForm){

    console.log(LoginForm)
    this.form = LoginForm;

    this.user.email = LoginForm.value.email;
    this.user.password = LoginForm.value.password;

    this.authservice.Login(this.user).subscribe(
      (data)=>{
        console.log(data);
      }, (errorMessage)=>{
        console.log(errorMessage)
      }

    )
  } 



}
