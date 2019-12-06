import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Doctor } from '../model/doctor';
import { DoctorserviceService } from '../service/doctorservice.service';

import { SharedService } from '../shared.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-doctorslot',
  templateUrl: './doctorslot.component.html',
  styleUrls: ['./doctorslot.component.css']
})
export class DoctorslotComponent{
  doc:Doctor[]
  constructor(private router:Router,private doctorService:DoctorserviceService ,private sharedService: SharedService) {
   
   }

  ngOnInit() {
    //this.sharedService.doctor.branch="hebbal";
    //this.sharedService.doctor.specialist="dental"
    console.log("hello")
    console.log(this.sharedService.doctor.branch)
    console.log(this.sharedService.doctor.specialist)
    console.log(this.sharedService.doctor)
    
    this.doctorService.findBybranchandspec(this.sharedService.doctor).pipe(finalize(()=>{for (const val of this.doc) {
      console.log(val.lastName);
      
    }})).subscribe(data=>{this.doc=data})
  }
  onSubmit(doctor:Doctor){

    this.sharedService.appointment.doctor_id=doctor.doctor_id;
    this.sharedService.doctor.fee=doctor.fee;
    console.log(this.sharedService.appointment.doctor_id);
    this.router.navigate(['dateandtime'])
  }
 

}
