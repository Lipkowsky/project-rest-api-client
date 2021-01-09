import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AuthenticationService } from '../authentication.service';
import { ProjektService } from './projekt.service';

@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})
export class ProjektComponent implements OnInit {

  projekt: any;
  nazwa!: string;
  kolejnosc!: number;
  opis!: string;
  data: any;
  role!: any;
  isLoggedIn!: boolean;

  constructor(public projektService : ProjektService, private router: Router, private authenticationService: AuthenticationService, private route: ActivatedRoute) {}

  ngOnInit(): void{

    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    } else {
      this.role = this.authenticationService.getRole();
      console.log(this.role);
    }

    this.route.params.subscribe(data => {
      this.getProjekt(data.projekt_id);
    })
    
  }

  getProjekt(projekt_id: number) {
    this.projekt = this.projektService.getProjekt(projekt_id).subscribe(data => {
      this.projekt = data;
      console.log(this.projekt);
    })
  }

  dodajZadanieDoProjektu() {
    const momentDate = new Date(this.data);
    const formattedDate = moment(momentDate).format("YYYY-MM-DD");
    this.projektService.dodajZadanieDoProjektu(this.nazwa, this.opis, this.kolejnosc, formattedDate, this.projekt.projektId).subscribe(data => {
      console.log('data');
      console.log('Dodano zadanie do projektu')
      this.ngOnInit();
    })
  }

}
