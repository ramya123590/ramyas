import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../../models/doctor';
import { DoctorService } from '../../services/doctor.service';
import { MatRadioChange, MatRadioButton } from '@angular/material/radio';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Appointment } from 'src/app/model/appointment';
import { ApoointmentService } from 'src/app/service/apoointment.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
isDate:boolean=false
  doctors: Observable<Doctor[]>;
  appointment=new Appointment();
  dateUpdate:FormGroup
  constructor(private doctorService: DoctorService,private appointmentservice:ApoointmentService) { 
    this.dateUpdate = new FormGroup({
      date: new FormControl('', [Validators.required]),
    
    });
   }


  

  ngOnInit() {
    this.reloadData();
  };

  reloadData(){
    this.doctors=this.doctorService.getDoctorList();

    console.log(this.doctors);
  }

  deleteDoctor(doctor_id: number) {
    this.doctorService.deleteDoctor(doctor_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  onChange(mrChange: MatRadioChange) {
    console.log(mrChange.value);
    if(mrChange.value=="n"){
      this.isDate=true
    }
    if(mrChange.value=="y"){
      this.isDate=false
    }

  }
  onSubmit(id:Number){
    console.log(this.dateUpdate.get('date').value);
    console.log("dao"+id)
    this.appointment.doctor_id=id;
    this.appointment.date=this.dateUpdate.get('date').value;
    this.appointmentservice.notAvailable(this.appointment).subscribe();

  }


}
