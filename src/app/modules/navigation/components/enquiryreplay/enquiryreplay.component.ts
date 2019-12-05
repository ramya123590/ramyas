import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Enquiryreply } from '../../models/enquiryreply';
import { EnquiryService } from '../../services/enquiry.service';

@Component({
  selector: 'app-enquiryreplay',
  templateUrl: './enquiryreplay.component.html',
  styleUrls: ['./enquiryreplay.component.css']
})
export class EnquiryreplayComponent implements OnInit {
  Enquiryreply:FormGroup
  enquiryreply=new Enquiryreply();
    constructor(private router:ActivatedRoute,private enquiryService: EnquiryService) { 
    this.Enquiryreply = new FormGroup({
      email: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    
    });
    
  }

  ngOnInit() {
    console.log(this.router.snapshot.queryParamMap.get('Email'))
    this.enquiryreply.email=this.router.snapshot.queryParamMap.get('Email');
  }
  onSubmit(){
    this.enquiryService.replyEnquiry(this.enquiryreply).subscribe();
    this.enquiryreply= new Enquiryreply()
    alert("Replied Succesfully")
    
  }

}
