import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl ='http://localhost:1234/api/patientregister/validation';

  constructor(private http: HttpClient) { }

  loginValidation(login: Object): Observable<Object> {
    
    return this.http.post(`${this.baseUrl}` , login);
    
  }
  loginAdminValidation(login: Object): Observable<Object> {
    
    return this.http.post("http://localhost:9081/api/admins/validation" , login);
    
  }

}