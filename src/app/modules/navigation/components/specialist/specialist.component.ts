import { Component, OnInit } from '@angular/core';
import { Speciality } from '../../models/speciality';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { SpecialityService } from '../../services/speciality.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialist',
  templateUrl: './specialist.component.html',
  styleUrls: ['./specialist.component.css']
})
export class SpecialistComponent implements OnInit {
  SpecilalityGroup: FormGroup;

  specialists: Observable<Speciality[]>;

  constructor(private _formBuilder: FormBuilder 
    , private  specialistService:SpecialityService , private router: Router ) {}

     
  ngOnInit() { 
    this.SpecilalityGroup = this._formBuilder.group({
      specaility: ['', Validators.required],
    });
    
  }

  saveSpeciality(){
    
    let specaility = this.SpecilalityGroup.controls['specaility'].value;
    let specailits = new Speciality(specaility);
    console.log(specailits);
    this.specialistService.createSpecaility(specailits).subscribe(data => console.log(data) 
    ,  error => console.log(error));
    this.router.navigate(['/home']);
  }

  
}
