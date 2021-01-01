import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjektyService {
  url = 'http://localhost:8080/api/projekty';

  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<any> {
	let username = sessionStorage.getItem("username");
	let password = sessionStorage.getItem("password");
	console.log(username,password);
	const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<any>(this.url, {headers});
	//return this.http.get<any>(this.url);
  }
}


