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

  displayedColumns: string[] = ['projektId', 'dataOddania', 'nazwa', 'dataczasUtworzenia','opis', 'zadania', 'studenci', 'szczegoly'];
  dataSource = this.projektService.getAllProjects();


  isLoggedIn = false;
  

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if(!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }


  handleLogout() {
    this.authenticationService.logout();
  }
  
}

