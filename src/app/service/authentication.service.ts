
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patientregistration } from '../model/patientregistration';
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = "http://localhost:1234/api/loginvaliadtion";
  }
 
  public findAll(): Observable<Patientregistration[]> {
    return this.http.get<[]>(this.usersUrl);
  }
 
 
  public authentication(user: Patientregistration){
    return this.http.post<Patientregistration>(this.usersUrl, user);
  }
}
