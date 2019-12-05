import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { AdminService } from "../../services/admin.service";
import { Admin } from "../../models/admin";
import {FormControl,FormGroup,Validators, FormBuilder} from '@angular/forms';  


@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  adminsaveform: FormGroup;

  constructor(private adminService:AdminService,private _formBuilder: FormBuilder) {}


  ngOnInit() {
    this.adminsaveform = this._formBuilder.group({
      admin_userName: ['', Validators.required],
      admin_password:['', Validators.required]
    });
  }

  saveAdmin(){
    let admin_userName = this.adminsaveform.controls['admin_userName'].value;
    let admin_password = this.adminsaveform.controls['admin_password'].value;

    console.log(this.adminsaveform.controls['admin_userName'].value);
   console.log(this.adminsaveform.controls['admin_password'].value);

   console.log(admin_userName ,admin_password);
    let admin = new Admin(admin_userName , admin_password);
    console.log(admin);
    this.adminService.createAdmin(admin).subscribe(data => console.log(data) 
    ,  error => console.log(error))
  }
  
  }
//   admin : Admin;
//   submitted = false;  

//   constructor(private adminService:AdminService) {
//     this.admin = new Admin();  
//    }   
  
//   ngOnInit() {  
//     this.submitted=false;  
//   }  

//   adminsaveform = new FormGroup({
//     admin_userName : new FormControl(),
//     admin_password : new FormControl()
//   });
  
//  saveAdmin() {
//   this.adminService.createAdmin(this.admin).subscribe(data => console.log(data), error => console.log(error))
//  }
  
//   addAdminForm(){  
//     this.submitted=false;  
//     this.adminsaveform.reset();  
//   }  





