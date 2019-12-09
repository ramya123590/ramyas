import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Patientregistration } from '../model/patientregistration';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { PatientregistrationserviceService } from '../service/patientregistrationservice.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordForm: FormGroup;
  submitted = false;
  patient=new Patientregistration();
  verifypatient=new Patientregistration();
 
  
  constructor(private router:Router,private loginService : LoginService,private findemail:PatientregistrationserviceService) { 
    this.resetpasswordForm = new FormGroup({
      email: new FormControl(''), 
      password:new FormControl('')
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
       if (this.resetpasswordForm.invalid) {
           return;
       }
       else
       {
     
        
        
         this.verifypatient.email=this.resetpasswordForm.controls['email'].value;
        // this.loginService.resetpassword(this.patient).subscribe(data => console.log(data) 
        // ,  error => console.log(error));
        // alert("New Password has been Created ")
        this.findemail.findbyemail(this.verifypatient).pipe(finalize(()=>{

          if(this.verifypatient!=null){
            this.patient.email= this.resetpasswordForm.controls['email'].value;
        this.patient.password=this.resetpasswordForm.controls['password'].value;
        console.log(this.patient.email);
            this.loginService.resetpassword(this.patient).subscribe(data => console.log(data) 
            ,  error => console.log(error));
            alert("New Password has been Created ")
            this.router.navigate(['login'])
            
          }
          else{
            alert("Not registered email please signup Or enter registered email")
          }
        })).subscribe(data=>{this.verifypatient=data})
        
       }
       }

      
  }
  


