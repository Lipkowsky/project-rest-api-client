import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ProjektyService } from './projekty.service';

@Component({
  selector: 'app-projekty',
  templateUrl: './projekty.component.html',
  styleUrls: ['./projekty.component.css'],
})
export class ProjektyComponent implements OnInit {
  constructor(private projektService: ProjektyService, private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {}

  displayedColumns: string[] = ['projektId', 'dataOddania', 'dataOddania', 'nazwa', 'dataczasUtworzenia','opis', 'zadania', 'studenci'];
  dataSource = [{"projektId":1,"nazwa":"Projekt1","opis":"Opis1","dataczasUtworzenia":"2020-10-10T00:00:00","dataOddania":"2021-10-10","zadania":[],"studenci":[]}];


  isLoggedIn = false;
  

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if(!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    this.projektService.getAllProjects().subscribe(project => {
      
      this.dataSource.push(project);
      
    })
  }


  handleLogout() {
    this.authenticationService.logout();
  }
  
}

