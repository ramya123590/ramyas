import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Doctor} from '../model/doctor';
import {Branch} from '../model/branch';
import {Specialist} from '../model/specialist';
@Injectable({
  providedIn: 'root'
})
export class DoctorserviceService {

  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:1236/otp';
  }
  public findAll(): Observable< Doctor[]> {
    return this.http.get< Doctor[]>(this.usersUrl);
  }
  public findbranch(): Observable< Branch[]> {
    return this.http.get< Branch[]>("http://localhost:1234/api/branch");
  }
  public findspcl(): Observable< Specialist[]> {
    return this.http.get< Specialist[]>("http://localhost:1234/api/specialist");
  }
  public findBybranchandspec(doctor:  Doctor): Observable< Doctor[]> {
    return this.http.post< Doctor[]>("http://localhost:1234/api/doctorschedule",doctor);
  }
  public otpgenerate(otp:  Doctor) {
    return this.http.post< Doctor>(this.usersUrl, otp);
  }
}




