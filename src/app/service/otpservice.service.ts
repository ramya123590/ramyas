import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Patientregistration } from '../model/patientregistration';
import { Observable } from 'rxjs/Observable';
import {Otp} from '../model/otp';
@Injectable({
  providedIn: 'root'
})
export class OtpserviceService {
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:1236/otp';
  }
  public findAll(): Observable<Otp[]> {
    return this.http.get<Otp[]>(this.usersUrl);
  }
  public findByemail(otp: Otp): Observable<Otp> {
    return this.http.post<Otp>("http://localhost:1236/findbyemail",otp);
  }
  public otpgenerate(otp: Otp) {
    return this.http.post<Otp>(this.usersUrl, otp);
  }

}




