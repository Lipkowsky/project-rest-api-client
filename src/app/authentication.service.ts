import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username!: String;
  public password!: String;

  constructor(private http: HttpClient) {

  }


  getRole(){
    const role = sessionStorage.getItem('myrole');
    return role;
  }

  setRole(){
    return this.http.get(`https://localhost:8443/api/myrole`, {responseType: 'text'}).subscribe(res => {
      sessionStorage.setItem('myrole', res)
    })
  }

  authenticationService(username: String, password: String) {
    return this.http.get(`https://localhost:8443/api/login`,
      { headers: { authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(username.toString(), password.toString());
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(username : string, password: string) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    sessionStorage.setItem('token',this.createBasicAuthToken(username, password))
    console.log('sucess');
    this.setRole();
  }

  logout() {
    sessionStorage.removeItem('token');
    this.username = '';
    this.password = '';
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token')
    if (user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    if(user) return user;
    

  }
}