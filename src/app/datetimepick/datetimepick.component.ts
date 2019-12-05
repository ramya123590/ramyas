import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApoointmentService } from '../service/apoointment.service';
@Component({
  selector: 'app-datetimepick',
  templateUrl: './datetimepick.component.html',
  styleUrls: ['./datetimepick.component.css']
})
export class DatetimepickComponent implements OnInit {
  istrue:boolean
  dateandtime:FormGroup
  // payathospital:boolean=true;
  // payatonline:boolean=true;
  constructor(private router:Router,private sharedService: SharedService,private appointmentservice:ApoointmentService) {
    this.dateandtime = new FormGroup({
      date: new FormControl('', [Validators.required]),
     slot: new FormControl('', [Validators.required])
    });
   }

  ngOnInit() {
    this.istrue=false;
    var today = new Date().toISOString().split('T')[0];
    document.getElementsByName("txtDate")[0].setAttribute('min', today);
    var someDate = new Date();
  var numberOfDaysToAdd = 10;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
  document.getElementsByName("txtDate")[0].setAttribute('max', someDate.toISOString().split('T')[0]);
  }
  onSubmit(){
    this.appointmentservice.find(this.sharedService.appointment).subscribe(data=>{
      if(data){
        alert("this slot is already booked select some other slot");

    }
    else{
      this.istrue=true;
    }
  })
   
    //this.router.navigate(['payment'])
  }
  savevalue(){
    this.appointmentservice.find(this.sharedService.appointment).subscribe(data=>{
      if(data){
        alert("this slot is already booked select some other slot");

    }
    else{
      console.log(this.sharedService.appointment.date);
      console.log(this.sharedService.appointment.slot);
      this.sharedService.appointment.patient_id=sessionStorage.getItem("LoggedInUser")
      this.sharedService.appointment.isfeepaid=false;
  
      console.log(this.sharedService.appointment)
      this.appointmentservice.save(this.sharedService.appointment).pipe(finalize(()=>{ this.router.navigate(['appointmentdetails'])})).subscribe();
      alert("Your booking is confirmed!")
      // this.payatonline=false;
     

    }
  })

   
  }
  onlinesave(){
    this.appointmentservice.find(this.sharedService.appointment).subscribe(data=>{
    if(data){
      alert("this slot is already booked select some other slot");

  }
  else{
    console.log(this.sharedService.appointment.date);
    console.log(this.sharedService.appointment.slot);
    this.sharedService.appointment.patient_id=sessionStorage.getItem("LoggedInUser")
    this.sharedService.appointment.isfeepaid=true;

    console.log(this.sharedService.appointment)
    this.appointmentservice.save(this.sharedService.appointment).pipe(finalize(()=>{ this.router.navigate(['payment'])})).subscribe();
   
    // this.payatonline=false;

  }
   }) 
    
  }

}