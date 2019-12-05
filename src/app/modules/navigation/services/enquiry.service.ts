import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enquiry } from '../models/enquiry';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private baseUrl ='http://localhost:1234/api/enquirys';

  constructor(private http: HttpClient) { }

  getEnquiry(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEnquiry(enquiry: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, enquiry);
  }
  replyEnquiry(enquiryreply: Object): Observable<Object> {
    return this.http.post("http://localhost:1234/api/reply", enquiryreply);
  }

  updateEnquiry(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEnquiry(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEnquiryList(): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>(`${this.baseUrl}`);
  }

  sendResponse(response: String , id: number ): Observable<object> {
    return this.http.post(`http://localhost:9006/sendSimpleEmail/${id}/${response}` , id );
  }

}
