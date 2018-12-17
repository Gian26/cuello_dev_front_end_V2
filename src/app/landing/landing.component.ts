import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { SocialUser } from 'angularx-social-login';

import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from "angularx-social-login";
  // Can also be included with a regular script tag
import Typed from 'typed.js';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(){
    
  }
  // user: SocialUser;


  // constructor(private authService: AuthService) { }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // }
  
  // signInWithLinkedIn(): void {
  //   this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  // }  

  // signOut(): void {
  //   this.authService.signOut();
  // }

ngOnInit() {
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    // });
 
var options ={
    strings: ['Fullstack\n Developer','Responsive','Robust','Reliable'],
    typeSpeed: 90,
    backSpeed: 60,
    loop: true
  }
var typed = new Typed(".element", options);
  }

}
