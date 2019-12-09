import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';
import { Branch } from '../model/branch';
import { Specialist } from '../model/specialist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class ApoointmentService {

 
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:1234/api/appointment';
  }
  public findAll(): Observable< Appointment[]> {
    return this.http.get< Appointment[]>(this.usersUrl);
  }
  public find(app:Appointment): Observable<any> {
    return this.http.post< Appointment>("http://localhost:1234/api/find",app);
  }
  public Appoinmentdetails(app:Appointment): Observable<Appointment[]> {
    return this.http.post< Appointment[]>("http://localhost:1234/api/appointment_details",app);
  }

  public save(user: Appointment) {
    return this.http.post<Appointment>(this.usersUrl, user);
  }
  public notAvailable(user: Appointment): Observable<any> {
    return this.http.post("http://localhost:1234/api/appointments", user);
  }
  deleteAppointment(id: Number): Observable<any> {
    return this.http.delete(`${this.usersUrl}/${id}`, { responseType: 'text' });
  }
  
  
}
