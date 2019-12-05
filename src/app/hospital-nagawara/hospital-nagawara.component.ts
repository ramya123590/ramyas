import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hospital-nagawara',
  templateUrl: './hospital-nagawara.component.html',
  styleUrls: ['./hospital-nagawara.component.css']
})
export class HospitalNagawaraComponent implements OnInit {
  

  constructor(private router : Router) { }

  ngOnInit() {
  }
  guestLogin(){
    let guest = "guest";
    sessionStorage.setItem("guestUser" , guest);
    this.router.navigate(["appoinment"]);
  }
}
