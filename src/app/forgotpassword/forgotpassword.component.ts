import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Patientregistration } from '../model/patientregistration';
import { LoginService } from '../service/login.service';
import { PatientregistrationserviceService } from '../service/patientregistrationservice.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm: FormGroup;
  submitted = false;
 patientemail=new Patientregistration();
  
  constructor(private router:Router,private loginService : LoginService,private findemail:PatientregistrationserviceService) { 
    this.forgotpasswordForm = new FormGroup({
      email: new FormControl(''), 
});
}
  ngOnInit() {
   
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
  onSubmit() {
    this.submitted = true;
      // stop here if form is invalid
       if (this.forgotpasswordForm.invalid) {
           return;
       }
       else
       {

        var Email = this.forgotpasswordForm.controls['email'].value;
        console.log(Email);
        this.patientemail.email=Email;
        this.findemail.findbyemail(this.patientemail).pipe(finalize(()=>{

          if(this.patientemail!=null){
            var Email = this.forgotpasswordForm.controls['email'].value;
            this.loginService.forgotpassword(Email).subscribe(data => console.log(data) 
            ,  error => console.log(error));
            alert("Password email sent to your registered email Id. Check that email and follow the instruction to reset password ")
            this.router.navigate(['login'])
          }
          else{
            alert("Not registered email please signup Or enter registered email")
            this.router.navigate(['login'])
          }
        })).subscribe(data=>{this.patientemail=data})
        
       }
  }
  }
