import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Patientregistration } from '../model/patientregistration';
import { PatientregistrationserviceService } from '../service/patientregistrationservice.service';
import { loginUser } from '../model/loginUser';

@Component({
  selector: 'app-navigation-profile',
  templateUrl: './navigation-profile.component.html',
  styleUrls: ['./navigation-profile.component.css']
})
export class NavigationProfileComponent implements OnInit {

  
patientdetail:Patientregistration;
  constructor( private auth: AuthService,private patientregistrationservice:PatientregistrationserviceService,private patientregistration:Patientregistration) { }

  ngOnInit() {
    console.log(sessionStorage.getItem("LoggedInUser"));
this.patientregistration.userId=sessionStorage.getItem("LoggedInUser");

this.patientregistrationservice.findById(this.patientregistration).subscribe(data=>{this.patientdetail=data})

  }

}
