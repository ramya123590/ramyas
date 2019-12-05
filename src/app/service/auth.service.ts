import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  constructor(private myRoute: Router) { }

  sendToken(token: string) {
  //  localStorage.setItem("LoggedInUser", token);
    sessionStorage.setItem("LoggedInUser", token);
  }

  getToken() {
    
    return sessionStorage.getItem("LoggedInUser")
  }

  isLoggednIn() {
    return this.getToken() !== null;
  }

  logout() {
    sessionStorage.removeItem("LoggedInUser");
    sessionStorage.removeItem("guestUser");
    this.myRoute.navigate([""]);
  }
}