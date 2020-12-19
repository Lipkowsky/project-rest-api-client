import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjektyService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<any> {
    return this.http.get<any>(this.url+'projekty');
  }
}


