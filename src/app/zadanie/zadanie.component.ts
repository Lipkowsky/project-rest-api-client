import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ZadanieService } from './zadanie.service';

@Component({
  selector: 'app-zadanie',
  templateUrl: './zadanie.component.html',
  styleUrls: ['./zadanie.component.css']
})
export class ZadanieComponent implements OnInit {

  zadanie: any;


  constructor(public zadanieService : ZadanieService, private route: ActivatedRoute) { }

  

  ngOnInit(): void{
    this.route.params.subscribe(data => {
      this.getZadanie(data.zadanie_id);
    })
  }

  getZadanie(zadanie_id: number) {
    this.zadanie = this.zadanieService.getZadanie(zadanie_id).subscribe(data => {
      this.zadanie = data;
      console.log(this.zadanie);
    })
  }


}
