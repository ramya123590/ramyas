import { Component, OnInit } from '@angular/core';
import { Patientregistration } from '../model/patientregistration';
import { AuthService } from '../service/auth.service';
import { PatientregistrationserviceService } from '../service/patientregistrationservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    
patientdetail:Patientregistration;
constructor( private auth: AuthService,private patientregistrationservice:PatientregistrationserviceService,private patientregistration:Patientregistration) { }

ngOnInit() {
  console.log(sessionStorage.getItem("LoggedInUser"));
this.patientregistration.userId=sessionStorage.getItem("LoggedInUser");

this.patientregistrationservice.findById(this.patientregistration).subscribe(data=>{this.patientdetail=data})

}

}
