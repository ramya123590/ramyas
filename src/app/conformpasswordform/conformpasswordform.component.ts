import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl,Validators} from '@angular/forms';
import {User } from '../password';
import { PatientregistrationserviceService } from '../service/patientregistrationservice.service';
import { SharedService } from '../shared.service';
import {Patientregistration} from '../model/patientregistration'

import { finalize } from 'rxjs/operators';
@Component({
 
  selector: 'app-conformpasswordform',
  templateUrl: './conformpasswordform.component.html',
  styleUrls: ['./conformpasswordform.component.css']
})

export class ConformpasswordformComponent implements OnInit {

  f: FormGroup;
  patientemail:Patientregistration;
  public user: User;
  constructor( private router:Router,private userService:PatientregistrationserviceService ,private sharedService: SharedService){
    this.f = new FormGroup({
      password: new FormControl(''),
    });
  }
  ngOnInit() {
    this.user = {
      password: '',
      confirmPassword: ''
    }
  }

  
  save(model: User, isValid: boolean) {
   
    // call API to save customer
    //console.log(model, isValid);
    this.userService.save(this.sharedService.user).subscribe(data =>{
      this.gotouserId()})

    //this.router.navigate(['userId'])
  }
  gotouserId(){
    this.userService.findbyemail(this.sharedService.user).pipe(finalize(()=>{this.sharedService.user.userId=this.patientemail.userId;this.router.navigate(['userId'])}))
    .subscribe(data=>{this.patientemail=data})
    
    console.log(this.sharedService.user.userId);
   // this.userService.findAll().subscribe(data=>{this.sharedService.user=data})
   // this.router.navigate(['userId'])
  }
  
}

