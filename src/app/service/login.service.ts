import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patientregistration } from '../model/patientregistration';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl ='http://localhost:1234/api/patientregister/validation';
  private forgotpasswordurl="http://localhost:1234/api/patientregister";
  private resetpasswordurl="http://localhost:1234/api/resetpassword";
  
  constructor(private http: HttpClient) { }

  loginValidation(login: Object): Observable<Object> {
    
    return this.http.post(`${this.baseUrl}` , login);
    
  }
  loginAdminValidation(login: Object): Observable<Object> {
    
    return this.http.post("http://localhost:9081/api/admins/validation" , login);
    
  }
  forgotpassword(email:String): Observable<Object>
  {
    return this.http.post(`${this.forgotpasswordurl}/${email}`,email);
  }
  resetpassword(patient:Patientregistration): Observable<Object>
  {
    return this.http.post(`${this.resetpasswordurl}`,patient);
  }
}