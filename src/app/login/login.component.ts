import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { loginUser } from '../model/loginUser';

import {Router} from "@angular/router";
import { LoginService } from '../service/login.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 isValid:boolean;
  loginForm: FormGroup;
  submitted = false;
  invalidLogin: boolean = false;

  constructor(private loginService : LoginService, private router: Router  , private auth : AuthService) {
  this.loginForm = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  }

ngOnInit()
{
  
  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Get the forms we want to add validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();
}


get f() { return this.loginForm.controls; }



onSubmit(model: loginUser) {
  this.submitted = true;
// stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }
  else{
    let userId = this.loginForm.controls['userId'].value;
    let password = this.loginForm.controls['password'].value;
    
    let loginuser = new loginUser(userId , password);
    console.log(loginuser);
    this.loginService.loginValidation(loginuser).subscribe(data => {

        if(data){
          
          this.auth.sendToken(userId);
        // console.log(this.auth.sendToken(userId));

          if(sessionStorage.getItem("guestUser") === "guest")
          {
            this.router.navigate(["appoinment"])
          }
          else{
            this.router.navigate(["dashboard"]);
          }
          
        }
        else if(!data){
          
          this.loginService.loginAdminValidation(loginuser).subscribe(data=>{if(data){
            this.auth.sendToken(userId);
            this.router.navigate(["home"])
          }
          else{
            alert("wrong userId or password");
          }
  })


        }
      
       
     });
    
  }
  

  }
  // display form values on success
  //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
}


