import { Time } from '@angular/common';
import { Patientregistration } from './patientregistration';
import { Doctor } from './doctor';

export class Appointment {
       id:Number;
	
	
	   date:Date;

	   slot:Time;
	firstName:String;
	patientregistration:Patientregistration;
	doctorregistration:Doctor
	doctor_id:Number;
	patient_id:String;
	  isfeepaid: boolean;
}