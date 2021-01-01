import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ZadanieService {

  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getZadanie(zadanie_id : number) {
    return this.http.get<any>(this.url+'zadania/?zadanie_id='+zadanie_id);
  }
}