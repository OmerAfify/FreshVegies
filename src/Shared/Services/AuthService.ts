import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { ILoginResponseData, IRegisterResponseData } from "../Interfaces/IAuthResponseData";
import { IUser } from "../Interfaces/IUser";
import { UserAuthentication } from "../Models/UserAuthentication";

@Injectable()

export class AuthService{

    userAuth = new BehaviorSubject<UserAuthentication|null>(null);
    private tokenTimer:any=null;

    constructor(private http:HttpClient, private router:Router){}

    SignUp(user:IUser):Observable<IRegisterResponseData>{
        return this.http.post<IRegisterResponseData>
        ("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9sfD0gJQiqeTzWrdPamOWQXfc1hJlu7M",
        { 
        email : user.email,
        password : user.password,	
        returnSecureToken : true	
        }
        ).pipe(
            catchError( this.ErrorHandler),
            tap( (resData) =>{this.UserAuthHandler(resData)})
        )
    }

    Login(user:IUser):Observable<ILoginResponseData>{
        return this.http.post<ILoginResponseData>
        ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9sfD0gJQiqeTzWrdPamOWQXfc1hJlu7M",
        { 
        email : user.email,
        password : user.password,	
        returnSecureToken : true	
        }
        ).pipe( catchError(this.ErrorHandler), tap( (resData) =>{
            this.UserAuthHandler(resData)}) )


    }

    Logout(){
        this.userAuth.next(null);
        this.router.navigate(["/Login"]);
        localStorage.removeItem("userData");

        if(this.tokenTimer){
            clearTimeout(this.tokenTimer)
        }

        this.tokenTimer = null;
    }

    AutoLogin(){

        let user = localStorage.getItem('userData');
       
        if(user){
            const userData:{
                           id:string,
                           email:string,
                           _token:string,
                           _tokenExpirationDate:string} = JSON.parse(user);

            let loadedUser = new UserAuthentication(userData.id,
                userData.email, 
                userData._token,
                new Date(userData._tokenExpirationDate))

            console.log("loaded user data after mapping is  :"+ JSON.stringify(loadedUser));
      
                if(loadedUser.token){
                    this.userAuth.next(loadedUser);
                    console.log("time being sended are ::" + (loadedUser.tokenExpirationDate.getTime() - new Date().getTime()))
                    this.AutoLogout( loadedUser.tokenExpirationDate.getTime() - new Date().getTime())
                    }
            } 
         else
            return;
    }


    AutoLogout(expirationDuration:number){
        console.log("exp dur is " + expirationDuration)

           this.tokenTimer =  setTimeout( ()=>{
            console.log("token time expired, autologout....")
                this.Logout() }, expirationDuration);
           
        }

    
// private helper methods

   private ErrorHandler(errorResponse:HttpErrorResponse){
       let errorMessage:string ="an Unknown error has occured";

       if(!errorResponse.error || !errorResponse.error.error)
       return throwError(errorMessage);

       errorMessage = errorResponse.error.error.message;
           return throwError(errorMessage);
        }

    private UserAuthHandler(userResponseData: ILoginResponseData | IRegisterResponseData){

            let userAuth = new UserAuthentication(
                userResponseData.localId, userResponseData.email,
                userResponseData.idToken, new Date( new Date().getTime() + (+userResponseData.expiresIn * 1000) ) )                             
           
            this.userAuth.next(userAuth); 
             this.AutoLogout(( userAuth.tokenExpirationDate.getTime() - new Date().getTime() ))
           
             localStorage.setItem('userData', JSON.stringify(userAuth))
             this.router.navigate (['/home'])                                 
        }
}

    

