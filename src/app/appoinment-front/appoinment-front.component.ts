import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { Doctor } from '../model/doctor';
import { DoctorserviceService } from '../service/doctorservice.service';

import { SharedService } from '../shared.service';
import { finalize } from 'rxjs/operators';
import { Branch } from '../model/branch';
import { Specialist } from '../model/specialist';
import { SpecialityService } from '../modules/navigation/services/speciality.service';
import { Observable } from 'rxjs';
import { Speciality } from '../modules/navigation/models/speciality';
@Component({
  selector: 'app-appoinment-front',
  templateUrl: './appoinment-front.component.html',
  styleUrls: ['./appoinment-front.component.css']
})
export class AppoinmentFrontComponent  {
  isSubmitted = false;
  branch1:Branch[];
  spcl:Specialist[];
  specialists: Observable<Speciality[]>;

  // City Names
  
  constructor(public fb: FormBuilder,private router:Router,private doctorService:DoctorserviceService ,
    private sharedService: SharedService, private  specialistService:SpecialityService) { }
  ngOnInit() {
    this.doctorService.findbranch().subscribe(data=>{this.branch1=data});
    
      this.doctorService.findspcl().pipe(finalize(()=>{for (const sp of this.spcl) {
        console.log(sp.specialist)}})).subscribe(data=>{this.spcl=data});
        this.specialistService.getAllSpecialistNames().subscribe(data =>{this.specialists=data} 
          ,  error => console.log(error));
  }
  /*########### Form ###########*/
  registrationForm = this.fb.group({
    branch: ['', [Validators.required]],
    specialist:['',[Validators.required]]

  })


   // Choose city using select dropdown
   changeCity(e) {
    console.log(e.value)
    this.branch.setValue(e.target.value, {
      onlySelf: true
    })
  }
  changeSpl(e) {
    console.log(e.value)
    this.specialist.setValue(e.target.value, {
      onlySelf: true
    })
  }
  // Getter method to access formcontrols
  get branch() {
    return this.registrationForm.get('branch');
  }

  get specialist() {
    return this.registrationForm.get('specialist');
  }
  /*########### Template Driven Form ###########*/
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      alert("Please select City and Specialist")
      return false;
    } else {
      console.log(JSON.stringify(this.sharedService.doctor.branch));
      console.log(this.sharedService.doctor.specialist);
      this.router.navigate(['doctorslot'])

     
    }

  }

}