import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { SharedService } from 'src/app/shared.service';
import { ApoointmentService } from 'src/app/service/apoointment.service';
import { finalize } from 'rxjs/operators';
import { Appointment } from 'src/app/model/appointment';




@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment:Appointment[];
  constructor( private auth: AuthService,private sharedService: SharedService,private appointmentservice:ApoointmentService) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData(){
   
    this.appointmentservice.findAll().subscribe(data=>{
      this.appointment=data
    
      console.log(this.appointment);
    });
  }
}

