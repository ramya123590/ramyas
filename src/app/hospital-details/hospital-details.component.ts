import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  guestLogin(){
    let guest = "guest";
    sessionStorage.setItem("guestUser" , guest);
    this.router.navigate(["appoinment"]);
  }
}
