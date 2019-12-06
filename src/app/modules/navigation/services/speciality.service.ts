import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {
  private baseUrl ='http://localhost:9081/api/speciality';
  private  branchUrl='http://localhost:9081/api/branch';

  constructor(private http: HttpClient) { }

  getSpecaility(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  

  createSpecaility(speciality: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, speciality);
  }

  updateSpecaility(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteSpecaility(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getSpecailityList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getAllSpecialistNames(): Observable<any> {
    return this.http.get(`http://localhost:9081/api/speciality/names`);
  }
  getAllbranchtNames(): Observable<any> {
    return this.http.get(`http://localhost:9081/api/branch`);
  }
}
