import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Patientregistration } from '../model/patientregistration';
import { PatientregistrationserviceService } from '../service/patientregistrationservice.service';
import { OtpserviceService } from '../service/otpservice.service';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  
  constructor( private router:Router,private userService:PatientregistrationserviceService ,private sharedService: SharedService,private otpservice:OtpserviceService ) {
    //this.user = new Patientregistration();
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      dob:new FormControl(''),
      age: new FormControl(''),
     gender: new FormControl(''),
     
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      pincode: new FormControl(''),
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
       if (this.registerForm.invalid) {
           return;
       }
       else{
        this.sharedService.otp.email= this.sharedService.user.email
       
        this.otpservice.otpgenerate(this.sharedService.otp).subscribe();
        
        this.router.navigate(['otpform'])
     //  this.userService.save(this.sharedService.user).subscribe();
       }
       console.log(this.registerForm.value);
       console.log(this.sharedService.user.dateofbirth)
   
       // display form values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }
}



