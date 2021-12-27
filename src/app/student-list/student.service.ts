import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = 'http://localhost:5000/api/v1/students'

constructor(private httpClient : HttpClient) {
  
 }
 getEmployeesList(): Observable<Student[]> {
   return this.httpClient.get<Student[]>(`${this.baseURL}`);
 }

}
