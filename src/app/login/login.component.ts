import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    const username = this.username;
    const password = this.password;
    console.log(username, password);
    this.loginService.login(username, password);

  }

}
