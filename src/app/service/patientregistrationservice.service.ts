import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patientregistration } from '../model/patientregistration';
import { Observable } from 'rxjs/Observable';
import { loginUser } from '../model/loginUser';

@Injectable({
  providedIn: 'root'
})
export class PatientregistrationserviceService {

  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:1234/api/patientregister';
  }
 
  public findAll(): Observable<Patientregistration[]> {
    return this.http.get<Patientregistration[]>(this.usersUrl);
  }
  public findById(patient:Patientregistration): Observable<Patientregistration> {
    return this.http.post<Patientregistration>("http://localhost:1234/api/findbyuserid",patient);
  }
 
  public save(user: Patientregistration) {
    return this.http.post<Patientregistration>(this.usersUrl, user);
  }
  public findbyemail(user: Patientregistration):Observable<Patientregistration> {
    return this.http.post<Patientregistration>("http://localhost:1234/api/findbyemail", user);
  }
  public update(id: String, value: any): Observable<Object> {
    return this.http.put(`${this.usersUrl}/${id}`, value);
  }
  
}
