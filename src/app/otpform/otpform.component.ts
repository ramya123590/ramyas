import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import { SharedService } from '../shared.service';
import { OtpserviceService } from '../service/otpservice.service';
import { Router } from '@angular/router';
import { Otp } from '../model/otp';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-otpform',
  templateUrl: './otpform.component.html',
  styleUrls: ['./otpform.component.css']
})
export class OtpformComponent implements OnInit {

  otpForm: FormGroup;
  submitted = false;
  otpp:Otp;
  
  constructor(private sharedService: SharedService,private router:Router,private otpservice:OtpserviceService) { 
    this.otpForm = new FormGroup({
      email: new FormControl(''),
    otp1: new FormControl(''),
 

  
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
       if (this.otpForm.invalid) {
           return;
       }
       else
       {
     
       
      
        this.otpservice.findByemail(this.sharedService.otp).pipe(finalize(()=>{this.sharedService.otp.otp=this.otpp.otp;

          console.log(this.otpp.otp);
              
          console.log( this.sharedService.otp.otp)
          console.log(this.otpp.otp);this.sharedService.otp.otp
         if(this.otpp.otp==this.sharedService.otp.otp1){
          console.log(this.sharedService.otp.otp)
          console.log(this.sharedService.otp.otp1)

        this.router.navigate(['confirmform'])
       }
      
       else{
        
        console.log(this.otpp);
        console.log(this.sharedService.otp.otp)
        console.log(this.sharedService.otp.otp1)
         alert("invalid")
         return
       }}))
          .subscribe(data => {this.otpp= data});
          
        //   this.sharedService.otp.otp=this.otpp.otp;

        //   console.log(this.otpp.otp);
              
        //   console.log( this.sharedService.otp.otp)
        //   console.log(this.otpp.otp);this.sharedService.otp.otp
        //  if(this.otpp.otp==this.sharedService.otp.otp1){
        //   console.log(this.sharedService.otp.otp)
        //   console.log(this.sharedService.otp.otp1)

        // this.router.navigate(['confirmform'])
       }
      
      //  else{
        
      //   console.log(this.otpp);
      //   console.log(this.sharedService.otp.otp)
      //   console.log(this.sharedService.otp.otp1)
      //    alert("invalid")
      //    return
      //  }
      }
   
       // display form values on success
       //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.otpForm.value, null, 4));
  }


