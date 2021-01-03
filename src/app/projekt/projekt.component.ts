import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjektService } from './projekt.service';

@Component({
  selector: 'app-projekt',
  templateUrl: './projekt.component.html',
  styleUrls: ['./projekt.component.css']
})
export class ProjektComponent implements OnInit {

  projekt: any;

  constructor(public projektService : ProjektService, private route: ActivatedRoute) {}

  ngOnInit(): void{
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

  dodajZadanieDoProjektu(nazwaZadania: string, opisZadania: string, kolejnoscZadania : number, oddanieZadania : string, idProjektu : number) {
    this.projektService.dodajZadanieDoProjektu(nazwaZadania, opisZadania, kolejnoscZadania, oddanieZadania, idProjektu).subscribe(data => {
      console.log(data);
      console.log('Dodano zadanie do projektu')
    })
  }

}
