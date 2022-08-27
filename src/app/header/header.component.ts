import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/Shared/Services/AuthService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated :boolean =false;
  authUserEmail = "";
  userSubscription:any;

  constructor(private authService:AuthService) { }


  ngOnInit(): void {

      this.userSubscription =this.authService.userAuth.subscribe( (user)=>{
            if(user){
              this.authUserEmail = user.email;  
              this.isAuthenticated = true;
                  }
                else
                    this.isAuthenticated = false;

      })
    
  }

  onLogout(){
    this.authService.Logout();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe(); 
  }

}
