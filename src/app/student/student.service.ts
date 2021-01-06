import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getStudent(student_id: number) {
    return this.http.get<any>(this.url + 'student/' + student_id);
  }
}
