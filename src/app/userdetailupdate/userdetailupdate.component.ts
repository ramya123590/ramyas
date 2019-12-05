import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Patientregistration } from '../model/patientregistration';
import { PatientregistrationserviceService } from '../service/patientregistrationservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetailupdate',
  templateUrl: './userdetailupdate.component.html',
  styleUrls: ['./userdetailupdate.component.css']
})
export class UserdetailupdateComponent implements OnInit {

  updateForm: FormGroup;
  patientregistration:Patientregistration;
 
  
  constructor(private router:Router,private patientregistrationservive:PatientregistrationserviceService, private patient:Patientregistration) {
  
    this.updateForm = new FormGroup({
     
     
      firstName: new FormControl(''),
      email: new FormControl(''),
      dob:new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
      address: new FormControl('')
    });
  }
  
  ngOnInit() {
    this.patient.userId=sessionStorage.getItem("LoggedInUser");
    this.patientregistrationservive.findById(this.patient).subscribe(data=>{this.patientregistration=data})
   
  }
  updateEmployee() {
    this.patientregistrationservive.update(this.patient.userId,this.patientregistration)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patientregistration= new Patientregistration();
    this.gotodetails();
  }

  onSubmit() {
    this.updateEmployee();    
  }

  gotodetails() {
   this.router.navigate(['/profile']);
  }
}
