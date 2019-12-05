import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { SharedService } from '../shared.service';
import { ApoointmentService } from '../service/apoointment.service';
import { Appointment } from '../model/appointment';
import { finalize } from 'rxjs/internal/operators/finalize';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})

export class AppointmentDetailsComponent implements OnInit {
  appointment:Appointment[];
  isAppointment:boolean=true;
  constructor( private auth: AuthService,private sharedService: SharedService,private appointmentservice:ApoointmentService) { 
    
  }

  ngOnInit() {
    
this.reloadData();
  }
  
  reloadData(){
    this.sharedService.appointment.patient_id=sessionStorage.getItem("LoggedInUser");
    this.appointmentservice.Appoinmentdetails(this.sharedService.appointment).pipe(finalize(()=>{for (const val of this.appointment) {
      console.log(val.date);
      console.log(this.appointment)
      console.log(val.patientregistration.firstName)
      
      
    }
  })).subscribe(data=>{
      this.appointment=data
    
      console.log(this.appointment);
    });
  }
  deleteappointment(id:Number){
    this.appointmentservice.deleteAppointment(id).subscribe(data=>{this.reloadData();});
    console.log("succe")
  }

}
