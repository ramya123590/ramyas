import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EnquiryService } from '../service/enquiry.service';
import { Enquiry } from '../model/enquire';

@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrls: ['./enquire.component.css']
})
export class EnquireComponent implements OnInit {

  enquiryform: FormGroup;

  constructor(private enquiryService:EnquiryService,private _formBuilder: FormBuilder) {}

  
  ngOnInit() {
   
    this.enquiryform= this._formBuilder.group({
      userName: ['', Validators.required],
      branch: ['', Validators.required],
      message: ['', Validators.required],
	email: ['', Validators.required],
    });
  }
  
  saveEnquiry(){
    console.log(this.enquiryform.value);
    let userName= this.enquiryform.controls['userName'].value;
    let message= this.enquiryform.controls['message'].value;
    let email= this.enquiryform.controls['email'].value;
    let branch = this.enquiryform.controls['branch'].value;
console.log("hell"+userName);
    let enquiry= new Enquiry(userName,  email, branch,message );
    console.log(enquiry);
    alert("Thank you! \n Your message has been successfully sent. We will contact you very soon!");
    this.enquiryService.createEnquiry(enquiry).subscribe(data => console.log(data) 
    ,  error => console.log(error))
  }


}
