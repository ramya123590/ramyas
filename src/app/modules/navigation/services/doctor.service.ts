import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl ='http://localhost:1234/api/doctorregister';

  constructor(private http: HttpClient) { }

  
  getDoctor(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createDoctor(doctor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, doctor);
  }

  updateDoctor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getDoctorList(): Observable<any> {
    return this.http.get("http://b8java09.iiht.tech:8050/spring_enity_design/api/doctorregister");
  }


  
}




