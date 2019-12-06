import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NgModule } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';
import { Doctor } from '../../models/doctor';
import { Speciality } from '../../models/speciality';
import { Observable } from 'rxjs';
import { SpecialityService } from '../../services/speciality.service';
import { Branch } from '../../models/branch';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-adddoctor',
  templateUrl: './adddoctor.component.html',
  styleUrls: ['./adddoctor.component.css']
})
export class AdddoctorComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  specialists: Observable<Speciality[]>;
  allbranch: Branch[]
  count:boolean=false
  constructor(private doctorService:DoctorService,private _formBuilder: FormBuilder 
    , private  specialistService:SpecialityService) {}

  
   
  ngOnInit() {

    this.reloadData(); 
     
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName:['', Validators.required],
      gender:['', Validators.required],
      photo:['', Validators.required],
     
    });
    this.secondFormGroup = this._formBuilder.group({
      specaility: ['', Validators.required],
      branch: ['', Validators.required],
      fee: ['', Validators.required],
    //  specailityd: ['', Validators.required]
    });

    
     
    
  }

  reloadData(){
    this.specialistService.getAllSpecialistNames().subscribe(data =>{this.specialists=data} 
    ,  error => console.log(error));
  }


  
  saveDoctor(){


    let firstName = this.firstFormGroup.controls['firstName'].value;
    let lastName = this.firstFormGroup.controls['lastName'].value;
    let gender = this.firstFormGroup.controls['gender'].value;
    let photo = this.firstFormGroup.controls['photo'].value;
    
    let specialist = this.secondFormGroup.controls['specaility'].value;
    let branch = this.secondFormGroup.controls['branch'].value;
    let fee = this.secondFormGroup.controls['fee'].value;
this.specialistService.getAllbranchtNames().pipe(finalize(()=>{

  if(this.count){
    let doctor = new Doctor(firstName , lastName , gender , photo,fee , specialist , branch);
    console.log(doctor);
    this.doctorService.createDoctor(doctor).subscribe(data => console.log(data) 
    ,  error => console.log(error))
  }
else{
    alert("This "+branch+"branch is doesnot exists")
    return
  }
      
})).subscribe(data=>{this.allbranch=data;
for (let branchname of this.allbranch) {
  console.log(branchname.branchName);

  if(branch==branchname.branchName){
     this.count=true;
  }
  console.log(this.count)
  
}})


  }


  form1(){
    console.log(this.firstFormGroup.value);
  }

  form2(){
    console.log(this.secondFormGroup.value);
  }

}
